import { createContext, useCallback, useContext } from "react";
import { IChildren, ICreateClient } from "../../interfaces";
import { api } from "../../services/api";

interface IClientContext {
  addClient: (data: ICreateClient) => Promise<void>;
}

const ClientContext = createContext<IClientContext>({} as IClientContext);

const useClient = () => {
  const context = useContext(ClientContext);

  if (!context) {
    throw new Error("useClient must be used within an useClientProvider");
  }

  return context;
};

const ClientProvider = ({ children }: IChildren) => {
  const addClient = useCallback(async (data: ICreateClient) => {
    try {
      await api.post("/client", { data });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ClientContext.Provider value={{ addClient }}>
      {children}
    </ClientContext.Provider>
  );
};

export { ClientProvider, useClient };
