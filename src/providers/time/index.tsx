import { createContext, useCallback, useContext, useState } from "react";
import { IChildren } from "../../interfaces";
import { api } from "../../services/api";

interface ITime {}

interface ITimeState {}

interface TimeContextData {
  times: any;
}

const TimeContext = createContext<TimeContextData>({} as TimeContextData);

const useTime = () => useContext(TimeContext);

const TimeProvider = ({ children }: IChildren) => {
  const [times, setTimes] = useState<ITimeState>();

  const getTimes = useCallback(async () => {
    await api.get("/times");
  }, []);

  const searchTimes = useCallback(async (prof: string, day: string) => {
    await api.get(`/times/search?prof=${prof}&day=${day}`);
  }, []);

  return (
    <TimeContext.Provider value={{ times }}>{children}</TimeContext.Provider>
  );
};

export { TimeProvider, useTime };
