import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";
import { ClientProvider } from "./client";
import { FormOfServiceProvider } from "./formOfService";
import { ProfessionalProvider } from "./professional";
import { ScheduleProvider } from "./schedule";
import { TimeProvider } from "./time";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <FormOfServiceProvider>
      <TimeProvider>
        <ProfessionalProvider>
          <ScheduleProvider>
            <ClientProvider>
              <ChakraProvider theme={theme}>{children}</ChakraProvider>
            </ClientProvider>
          </ScheduleProvider>
        </ProfessionalProvider>
      </TimeProvider>
    </FormOfServiceProvider>
  );
};
