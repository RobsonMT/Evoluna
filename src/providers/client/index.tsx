import { createContext, useCallback, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IChildren, IClient, ICreateClient } from "../../interfaces";
import { api } from "../../services/api";

interface IClientContext {
  clientState: ICreateClient;
  setClientState: React.Dispatch<React.SetStateAction<ICreateClient>>;
  addClient: (data: ICreateClient) => Promise<IClient>;
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
  const [clientState, setClientState] = useState<ICreateClient>(
    {} as ICreateClient
  );

  const addClient = useCallback(async (data: ICreateClient) => {
    try {
      const response = await api.post("/client", data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        if (error.response.data.error.includes("(email)")) {
          toast.error("E-mail já cadastrado!");
        } else if (error.response.data.error.includes("(contact)")) {
          toast.error("Contato já cadastrado!");
        } else if (error.response.data.error.includes("(cpf)"))
          toast.error("CPF já cadastrado!");
      } else {
        console.log(error);
      }
    }
  }, []);

  return (
    <ClientContext.Provider value={{ clientState, setClientState, addClient }}>
      {children}
    </ClientContext.Provider>
  );
};

export { ClientProvider, useClient };
