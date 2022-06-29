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
  searchTimes: (query: ITimeQuery) => Promise<void>;
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

  const searchTimes = useCallback(async ({ prof, day }: ITimeQuery) => {
    try {
      const response = await api.get(`/times/search?prof=${prof}&day=${day}`);
      setSearchedTimes(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getTimes();
  }, []);

  console.log(times);

  return (
    <TimeContext.Provider value={{ times, searchedTimes, searchTimes }}>
      {children}
    </TimeContext.Provider>
  );
};

export { TimeProvider, useTime };
