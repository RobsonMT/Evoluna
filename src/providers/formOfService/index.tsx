import { createContext, useCallback, useContext, useState } from "react";
import { IChildren } from "../../interfaces";
import { api } from "../../services/api";

interface IFormOfService {}

interface IFormOfServiceState {}

interface FormOfServiceContextData {
  formsOfService: any;
}

const FormOfServiceContext = createContext<FormOfServiceContextData>(
  {} as FormOfServiceContextData
);

const useFormOfService = () => useContext(FormOfServiceContext);

const FormOfServiceProvider = ({ children }: IChildren) => {
  const [formsOfService, setFormsOfService] = useState<IFormOfServiceState>();

  const getFormsOfService = useCallback(async () => {
    await api.get("/formsOfService");
  }, []);

  return (
    <FormOfServiceContext.Provider value={{ formsOfService }}>
      {children}
    </FormOfServiceContext.Provider>
  );
};

export { FormOfServiceProvider, useFormOfService };
