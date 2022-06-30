import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { IChildren, IProfessional } from "../../interfaces";
import { api } from "../../services/api";

interface IProfessionalContext {
  professionals: IProfessional[];
}

const ProfessionalContext = createContext<IProfessionalContext>(
  {} as IProfessionalContext
);

const useProfessional = () => {
  const context = useContext(ProfessionalContext);

  if (!context) {
    throw new Error(
      "useProfessional must be used within an useProfessionalProvider"
    );
  }

  return context;
};

const ProfessionalProvider = ({ children }: IChildren) => {
  const [professionals, setProfessionals] = useState<IProfessional[]>([]);

  const getProfessionals = useCallback(async () => {
    try {
      const response = await api.get("/professionals");
      setProfessionals(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProfessionals();
  }, []);

  return (
    <ProfessionalContext.Provider value={{ professionals }}>
      {children}
    </ProfessionalContext.Provider>
  );
};

export { ProfessionalProvider, useProfessional };
