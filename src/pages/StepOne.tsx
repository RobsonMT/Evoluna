import { MotionContainer } from "../components/MotionContainer";
import { Steps } from "../components/Steps";
import { Header } from "../components/Header";
import { useHistory } from "react-router-dom";
import { useFormOfService } from "../providers/formOfService";
import { useProfessional } from "../providers/professional";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Input";
import { useClient } from "../providers/client";
import { useSchedule } from "../providers/schedule";
import { stepOneSchema } from "../schemas";
import { Button } from "../components/Button";
import {
  Box,
  Flex,
  Grid,
  Select,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

interface IStepOneData {
  email: string;
  formOfServiceId: string;
  professionalId: string;
}

export const StepOne = () => {
  const history = useHistory();

  const { setClientState } = useClient();
  const { setScheduleState } = useSchedule();
  const { formsOfService } = useFormOfService();
  const { professionals } = useProfessional();

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<IStepOneData>({
    resolver: yupResolver(stepOneSchema),
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

      history.push("/stepTwo");
    }
  };

  return (
    <MotionContainer>
      <Header />
      <Grid
        minH="calc(100vh - 50px)"
        justifyItems="center"
        alignItems="center"
        bg={useColorModeValue("whitesmoke", "black.300")}
        transition={"backgroud 1s ease"}
        transform={"backgroud 1s ease"}
      >
        <Steps step={1} />
        <Flex
          as="form"
          onSubmit={handleSubmit(handleStepOne)}
          flexDir="column"
          gap="20px"
          padding={["20px 40px", "20px 40px", "20px", "20px"]}
          w={["100%", "100%", "50%", "50%"]}
          maxW={["100%", "100%", "500px", "500px"]}
        >
          <Box>
            <Text fontSize="sm" fontWeight="bold" textAlign="center">
              Você escolheu
            </Text>
            <Select
              placeholder="Selecione o profissional"
              textAlign="center"
              fontSize={["sm", "md"]}
              bg={useColorModeValue("white", "gray.800")}
              h="35px"
              borderRadius="20px"
              boxShadow="md"
              color="gray.500"
              borderColor="gray.300"
              _hover={{ bgColor: "gray.100" }}
              _placeholder={{ color: "gray.300" }}
              _focus={{ bg: "gray.100" }}
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
              bg={useColorModeValue("white", "gray.800")}
              h="35px"
              borderRadius="20px"
              boxShadow="md"
              color="gray.500"
              border="1px solid"
              borderColor="gray.300"
              _hover={{ bgColor: "gray.100" }}
              _placeholder={{ color: "gray.300" }}
              _focus={{ bg: "gray.100" }}
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
              bg={useColorModeValue("white", "gray.800")}
              textAlign="center"
              placeholder="Digite aqui o e-mail"
              _placeholder={{ textAlign: "center" }}
              type="email"
              error={errors.email}
              {...register("email")}
            />
          </Box>

          <VStack>
            <Button
              model="primary"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding="5px 5px 5px 30px"
              type="submit"
            >
              CONTINUAR
            </Button>
            <Button model="outlined" p="5px 30px" onClick={() => reset()}>
              ALTERAR
            </Button>
          </VStack>
        </Flex>
      </Grid>
    </MotionContainer>
  );
};
