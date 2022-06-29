import { createContext, useCallback, useContext, useState } from "react";
import { IChildren } from "../../interfaces";
import { api } from "../../services/api";

interface IProfessional {}

interface IProfessionalState {}

interface ProfessionalContextData {
  professionals: any;
}

const ProfessionalContext = createContext<ProfessionalContextData>(
  {} as ProfessionalContextData
);

const useProfessional = () => useContext(ProfessionalContext);

const ProfessionalProvider = ({ children }: IChildren) => {
  const [professionals, setProfessionals] = useState<IProfessionalState>();

  const getProfessionals = useCallback(async () => {
    await api.get("/professional");
  }, []);

  return (
    <ProfessionalContext.Provider value={{ professionals }}>
      {children}
    </ProfessionalContext.Provider>
  );
};

export { ProfessionalProvider, useProfessional };
