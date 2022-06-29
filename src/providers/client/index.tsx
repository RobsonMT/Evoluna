import { createContext, useCallback, useContext, useState } from "react";
import { IChildren } from "../../interfaces";
import { api } from "../../services/api";

interface IClient {}

interface IClientState {}

interface ClientContextData {
  client: any;
  addClient: (data: IClient) => Promise<void>;
}

const ClientContext = createContext<ClientContextData>({} as ClientContextData);

const useClient = () => useContext(ClientContext);

const ClientProvider = ({ children }: IChildren) => {
  const [client, setClient] = useState<IClientState>();

  const addClient = useCallback(async (data: any) => {
    await api.post("/client", {
      data,
    });
  }, []);

  return (
    <ClientContext.Provider value={{ client, addClient }}>
      {children}
    </ClientContext.Provider>
  );
};

export { ClientProvider, useClient };
