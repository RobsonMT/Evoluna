import { createContext, useCallback, useContext, useState } from "react";
import { IChildren } from "../../interfaces";
import { api } from "../../services/api";
import { ICreateSchedule } from "../../interfaces";
import { toast } from "react-toastify";

interface IScheduleContext {
  scheduleState: ICreateSchedule;
  setScheduleState: React.Dispatch<React.SetStateAction<ICreateSchedule>>;
  addSchedule: (data: ICreateSchedule) => Promise<void>;
}

const ScheduleContext = createContext<IScheduleContext>({} as IScheduleContext);

const useSchedule = () => {
  const context = useContext(ScheduleContext);

  if (!context) {
    throw new Error("useSchedule must be used within an useScheduleProvider");
  }

  return context;
};

const ScheduleProvider = ({ children }: IChildren) => {
  const [scheduleState, setScheduleState] = useState<ICreateSchedule>(
    {} as ICreateSchedule
  );

  const addSchedule = useCallback(async (data: ICreateSchedule) => {
    try {
      await api.post("/schedule", data);

      toast.success(
        `Agendamento confirmado. Foi enviado um e-mail com mais informaçôes.`
      );
    } catch (error: any) {
      console.log(error);
    }
  }, []);

  return (
    <ScheduleContext.Provider
      value={{ scheduleState, setScheduleState, addSchedule }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};

export { ScheduleProvider, useSchedule };
