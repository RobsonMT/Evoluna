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
  searchTimes: ({ day, profId }: ITimeQuery) => Promise<void>;
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

  const getTimes = useCallback(async () => {
    try {
      const response = await api.get("/times");
      setTimes(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const searchTimes = useCallback(
    async ({ day, profId }: ITimeQuery) => {
      try {
        const response = await api.get(
          `/times/search?day=${day}&profId=${profId}`
        );

        times.forEach((time) => {
          if (response.data.find((rs: ITime) => rs.id === time.id)) {
            return (time.isSchedule = true);
          } else {
            return (time.isSchedule = false);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    [times]
  );

  useEffect(() => {
    getTimes();
  }, []);

  // console.log(times);

  return (
    <TimeContext.Provider value={{ times, searchTimes }}>
      {children}
    </TimeContext.Provider>
  );
};

export { TimeProvider, useTime };
