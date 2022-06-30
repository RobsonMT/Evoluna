import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { IChildren, IFormOfService } from "../../interfaces";
import { api } from "../../services/api";

interface IFormOfServiceContext {
  formsOfService: IFormOfService[];
}

const FormOfServiceContext = createContext<IFormOfServiceContext>(
  {} as IFormOfServiceContext
);

const useFormOfService = () => {
  const context = useContext(FormOfServiceContext);

  if (!context) {
    throw new Error(
      "useFormOfService must be used within an useFormOfServiceProvider"
    );
  }

  return context;
};

const FormOfServiceProvider = ({ children }: IChildren) => {
  const [formsOfService, setFormsOfService] = useState<IFormOfService[]>([]);

  const getFormsOfService = useCallback(async () => {
    try {
      const response = await api.get("/formsOfService");

      setFormsOfService(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getFormsOfService();
  }, []);

  return (
    <FormOfServiceContext.Provider value={{ formsOfService }}>
      {children}
    </FormOfServiceContext.Provider>
  );
};

export { FormOfServiceProvider, useFormOfService };
