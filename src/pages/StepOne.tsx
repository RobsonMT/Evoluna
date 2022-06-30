import {
  Box,
  Button,
  Flex,
  Grid,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MotionContainer } from "../components/MotionContainer";
import { Steps } from "../components/Steps";
import { Header } from "../components/Header";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { theme } from "../styles/theme";
import { useHistory } from "react-router-dom";
import { useFormOfService } from "../providers/formOfService";
import { useProfessional } from "../providers/professional";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Input";
import { useClient } from "../providers/client";
import { useEffect } from "react";
import { useSchedule } from "../providers/schedule";

interface IStepOneData {
  email: string;
  formOfServiceId: string;
  professionalId: string;
}

const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("E-mail obrigatório. Ex: nome@email.com."),
  formOfServiceId: yup.string().required(),
  professionalId: yup.string().required(),
});

export const StepOne = () => {
  const history = useHistory();

  // const { times, searchedTimes } = useTime();
  const { clientState, setClientState } = useClient();
  const { scheduleState, setScheduleState } = useSchedule();
  const { formsOfService } = useFormOfService();
  const { professionals } = useProfessional();

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<IStepOneData>({
    resolver: yupResolver(emailSchema),
  });

  const handleStepOne = ({
    email,
    formOfServiceId,
    professionalId,
  }: IStepOneData) => {
    if (email && professionalId && formOfServiceId) {
      setClientState((prev) => ({ ...prev, email: email }));
      setScheduleState((prev) => ({
        ...prev,
        formOfServiceId: formOfServiceId,
        professionalId: professionalId,
      }));
      reset();

      return history.push("/stepTwo");
    }
  };

  // useEffect(() => {
  //   console.log(clientState, "atualizando");
  // });

  return (
    <MotionContainer>
      <Header />
      <Grid minH="100vh" justifyItems="center" alignItems="center">
        <Steps />
        <Flex
          as="form"
          onSubmit={handleSubmit(handleStepOne)}
          flexDir="column"
          gap="20px"
          marginTop="20px"
          padding={["20px 40px", "20px 40px", "20px", "20px"]}
          w={["100%", "100%", "50%", "50%"]}
          maxW={["100%", "100%", "500px", "500px"]}
        >
          <Box>
            <Text fontSize="sm" fontWeight="bold" textAlign="center">
              Você escolheu:
            </Text>
            <Select
              placeholder="Selecione o profissional"
              textAlign="center"
              fontSize={["sm", "md"]}
              bg="whitesmoke"
              h="30px"
              borderRadius="15px"
              color="pink"
              {...register("professionalId")}
            >
              {professionals.map((item, key) => (
                <option key={key} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Select>
          </Box>
          <Box>
            <Text fontSize="sm" fontWeight="bold" textAlign="center">
              Formato do atendimento
            </Text>

            <Select
              placeholder="Selecione a forma de atendimento"
              textAlign="center"
              fontSize={["sm", "md"]}
              bg="whitesmoke"
              h="30px"
              borderRadius="15px"
              color="pink"
              {...register("formOfServiceId")}
            >
              {formsOfService.map((item, key) => (
                <option key={key} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Select>
          </Box>
          <Box textAlign="center">
            <Text fontSize="sm" fontWeight="bold" textAlign="center">
              Insira o e-mail utilizado na compra
            </Text>
            <Input
              placeholder="Digite aqui o e-mail"
              _placeholder={{ textAlign: "center" }}
              type="email"
              error={errors.email}
              {...register("email")}
            />
          </Box>
          <VStack>
            <Button
              bg="pink"
              borderRadius="15px"
              border="2px solid"
              color="gray.200"
              h="30px"
              display="flex"
              justifyContent="space-spaceBetween"
              alignItems="center"
              padding="5px 5px 5px 30px"
              transition="filter .1s linear "
              _hover={{ filter: "brightness(.9)" }}
              _active={{ filter: "brightness(1.1)" }}
              type="submit"
            >
              CONTINUAR
              <ChevronRightIcon
                h="20px"
                w="20px"
                color="purple.800"
                border={`2px solid ${theme.colors.purple[800]}`}
                borderRadius="50%"
                marginLeft="10px"
              />
            </Button>
            <Button
              bg="transparent"
              borderRadius="15px"
              border="2px solid"
              color="gray.200"
              h="30px"
              p="5px 30px"
              transition="filter .1s linear "
              _hover={{ filter: "brightness(.9)" }}
              _active={{ filter: "brightness(1.1)" }}
            >
              ALTERAR
            </Button>
          </VStack>
        </Flex>
      </Grid>
    </MotionContainer>
  );
};
