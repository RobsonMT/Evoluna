import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { IChildren, ITime, ITimeQuery } from "../../interfaces";
import { api } from "../../services/api";

interface ITimeContext {
  times: ITime[];
  searchedTimes: ITime[];
  setSearchedTimes: React.Dispatch<React.SetStateAction<ITime[]>>;
  searchTimes: ({ day, profId }: ITimeQuery) => Promise<void>;
  getTimes: () => Promise<void>;
}

const TimeContext = createContext<ITimeContext>({} as ITimeContext);

const useTime = () => {
  const context = useContext(TimeContext);

  if (!context) {
    throw new Error("useTime must be used within an useTimeProvider");
  }

  return context;
};

const TimeProvider = ({ children }: IChildren) => {
  const [times, setTimes] = useState<ITime[]>([]);
  const [searchedTimes, setSearchedTimes] = useState<ITime[]>([]);

  const getTimes = useCallback(async () => {
    try {
      const response = await api.get("/times");
      setTimes(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const searchTimes = async ({ day, profId }: ITimeQuery) => {
    try {
      await api.get(`/times/search?day=${day}&profId=${profId}`).then((res) => {
        setSearchedTimes(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTimes();
  }, []);

  return (
    <TimeContext.Provider
      value={{ times, searchedTimes, setSearchedTimes, searchTimes, getTimes }}
    >
      {children}
    </TimeContext.Provider>
  );
};

export { TimeProvider, useTime };
