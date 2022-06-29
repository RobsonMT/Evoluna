import { createContext, useCallback, useContext, useState } from "react";
import { IChildren } from "../../interfaces";
import { api } from "../../services/api";

interface ISchedule {}

interface IScheduleState {}

interface ScheduleContextData {
  schedule: any;
  addSchedule: (data: ISchedule) => Promise<void>;
}

const ScheduleContext = createContext<ScheduleContextData>(
  {} as ScheduleContextData
);

const useSchedule = () => useContext(ScheduleContext);

const ScheduleProvider = ({ children }: IChildren) => {
  const [schedule, setSchedule] = useState<IScheduleState>();

  const addSchedule = useCallback(async (data: any) => {
    await api.post("/schedule", {
      data,
    });
  }, []);

  return (
    <ScheduleContext.Provider value={{ schedule, addSchedule }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export { ScheduleProvider, useSchedule };
