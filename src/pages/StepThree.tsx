import { MotionContainer } from "../components/MotionContainer";
import { ICreateClient, ICreateSchedule } from "../interfaces";
import { Header } from "../components/Header";
import { Steps } from "../components/Steps";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Input";
import { useClient } from "../providers/client";
import { useSchedule } from "../providers/schedule";
import { stepThreeSchema } from "../schemas";
import { Button } from "../components/Button";
import {
  Box,
  Flex,
  FormErrorMessage,
  Grid,
  Heading,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

type TStepThreeData = Omit<ICreateClient, "email">;

export const StepThree = () => {
  const history = useHistory();

  const { clientState, setClientState, addClient } = useClient();
  const { scheduleState, setScheduleState, addSchedule } = useSchedule();

  const {
    formState: { errors },
    reset,
    register,
    handleSubmit,
  } = useForm<TStepThreeData>({
    resolver: yupResolver(stepThreeSchema),
  });

  const handleStepOne = async (data: TStepThreeData) => {
    await addClient({ ...clientState, ...data }).then(async (client) => {
      await addSchedule({ ...scheduleState, clientId: client.id })
        .then(() => {
          setClientState({} as ICreateClient);
          setScheduleState({} as ICreateSchedule);
          reset();
          history.push("/");
        })
        .catch((err) => console.log(err));
    });
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
        <Steps step={3} />
        <Flex
          as="form"
          onSubmit={handleSubmit(handleStepOne)}
          flexDir="column"
          gap="20px"
          mt="20px"
          padding={["20px 40px", "20px 40px", "20px", "20px"]}
          w={["100%", "100%", "50%", "50%"]}
          maxW={["100%", "100%", "500px", "500px"]}
        >
          <Heading
            as="h3"
            color={useColorModeValue("gray.800", "whitesmoke")}
            fontSize="lg"
            textAlign="center"
          >
            Preencha os dados para finalizar o seu agendamento
          </Heading>

          <Flex flexDir="column">
            <VStack
              spacing="5px"
              textAlign="center"
              borderRadius="lg"
              bg={useColorModeValue("LightGrey", "whitesmoke")}
              p="20px 10px"
            >
              <Heading
                as="h4"
                fontSize="md"
                textAlign="center"
                color="blue.800"
                mb="5px"
              >
                Instru????es importantes
              </Heading>
              <Text color="gray.800">Peencha o formul??rio com cuidado!</Text>
              <Text color="gray.800">
                Os mapas que apresentarem erros de preenchimento incorreto, n??o
                ser??o refeitos, ou uma taxa ser?? cobrada.
              </Text>
            </VStack>

            <VStack mt="10px" p="20px 0px" spacing={3}>
              <Box>
                <Text fontSize="sm" fontWeight="bold">
                  Whatsap de contato
                </Text>
                <Input
                  bg={useColorModeValue("whitesmoke", "gray.800")}
                  placeholder="ex: (21) 99999-9999"
                  type="text"
                  error={errors.contact}
                  {...register("contact")}
                />
                <Text fontSize="xs">
                  A astr??logia entrar?? em contato por esse n??mero
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="bold">
                  Nome completo
                </Text>
                <Input
                  bg={useColorModeValue("whitesmoke", "gray.800")}
                  placeholder="Digite seu Nome"
                  type="text"
                  error={errors.fullName}
                  {...register("fullName")}
                />
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="bold">
                  CPF
                </Text>
                <Input
                  bg={useColorModeValue("whitesmoke", "gray.800")}
                  placeholder="ex: 000.000.000-00"
                  type="text"
                  error={errors.cpf}
                  {...register("cpf")}
                />
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="bold">
                  Data de nascimento
                </Text>
                <Input
                  bg={useColorModeValue("whitesmoke", "gray.800")}
                  placeholder="ex: dd/mm/aaaa"
                  type="text"
                  error={errors.birthDate}
                  {...register("birthDate")}
                />
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="bold">
                  Hor??rio do nascimento
                </Text>
                <Input
                  bg={useColorModeValue("whitesmoke", "gray.800")}
                  placeholder="ex: 2 PM"
                  type="text"
                  error={errors.timeOfBirth}
                  {...register("timeOfBirth")}
                />
              </Box>
              <Box
                textAlign={["justify", "justify", "center", "center"]}
                bg={useColorModeValue("LightGrey", "whitesmoke")}
                color="gray.800"
                borderRadius="lg"
                p="10px"
                boxShadow="md"
                margin="50px 0px"
              >
                Coloque sempre AM ou PM no seu hor??rio de nascimento. Se seu
                hor??rio de nascimento for pr??ximo do meio da tarde, coloque AM.
                Se seu hor??rio de nascimento for pr??ximo do meio dia ou meia
                noite, escrever por extenso o hor??rio com os
                minutos(exemplo:meio dia e vinte ou meia noite e vinte). Se for
                ho??ario de ver??o, escrever conforme certid??o de nascimento, N??O
                retire a hora porque o sistema calcular?? automaticamente..
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="bold">
                  Cidade e estado onde nasceu
                </Text>
                <Input
                  bg={useColorModeValue("whitesmoke", "gray.800")}
                  placeholder="ex: S??o Paulo - SP"
                  type="text"
                  error={errors.birthCity}
                  {...register("birthCity")}
                />
              </Box>
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  color={useColorModeValue("gray.800", "whitesmoke")}
                >
                  Cidade e estado onde estava no ultimo anivers??rio ou que star??
                  no pr??ximo se estiver perto da data do anivers??rio.
                </Text>
                <Input
                  bg={useColorModeValue("whitesmoke", "gray.800")}
                  placeholder="ex: S??o Paulo - SP"
                  type="text"
                  error={errors.lastBirthdayCity}
                  {...register("lastBirthdayCity")}
                />
              </Box>
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  color={useColorModeValue("gray.800", "whitesmoke")}
                >
                  Quer fazer pergunta ao astr??logo? se sim, coloque tudo que
                  quer saber aqui em baixo.
                </Text>
                <Textarea
                  bg={useColorModeValue("whitesmoke", "gray.800")}
                  isInvalid
                  rows={5}
                  placeholder="Digite sua pergunta"
                  color="black"
                  borderRadius="20px"
                  boxShadow="md"
                  border="1px solid"
                  borderColor="gray.300"
                  {...register("question")}
                />
                {!!errors.question && (
                  <FormErrorMessage color="red">
                    {errors.question.message}
                  </FormErrorMessage>
                )}
              </Box>
              <Box
                textAlign={["justify", "justify", "center", "center"]}
                bg={useColorModeValue("LightGrey", "whitesmoke")}
                color="gray.800"
                borderRadius="lg"
                boxShadow="md"
                p="10px"
              >
                <Text fontSize="md">
                  O astr??logo entrar?? em contato com voc?? pr??ximo a data de
                  entrega, lembrando que o prazo para voc?? receber o mapa astral
                  ?? de at?? 20 dias.
                </Text>
                <Text fontSize="md">
                  N??O ESQUE??A de salvar seu mapa em um local seguro assim que
                  receb??-lo, porque n??o temos a c??pia dele.
                </Text>
              </Box>
            </VStack>
          </Flex>
          <VStack>
            <Button
              model="primary"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding="5px 5px 5px 30px"
              type="submit"
            >
              FINALIZAR
            </Button>
            <Text
              textAlign="center"
              fontSize="sm"
              fontWeight="bold"
              color={useColorModeValue("gray.800", "whitesmoke")}
            >
              Voc?? receber?? um e-mail com os dados do seu agendamento.
            </Text>
          </VStack>
        </Flex>
      </Grid>
    </MotionContainer>
  );
};
