import { MotionContainer } from "../components/MotionContainer";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Steps } from "../components/Steps";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { theme } from "../styles/theme";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Input";

const signUpSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
});

interface IData {
  name: string;
}

export const StepThree = () => {
  const history = useHistory();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IData>({
    resolver: yupResolver(signUpSchema),
  });
  return (
    <MotionContainer>
      <Header />
      <Grid minH="100vh" justifyItems="center" alignItems="center">
        <Steps />
        <Flex
          flexDir="column"
          gap="20px"
          mt="20px"
          padding={["20px 40px", "20px 40px", "20px", "20px"]}
          w={["100%", "100%", "50%", "50%"]}
          maxW={["100%", "100%", "500px", "500px"]}
          // border="2px solid #ccc"
        >
          <Heading as="h3" fontSize="md" textAlign="center">
            Preencha os dados para finalizar o seu agendamento
          </Heading>

          <Flex flexDir="column">
            <VStack
              spacing="5px"
              textAlign="center"
              borderRadius="lg"
              bg="white"
              p="20px 10px"
            >
              <Heading
                as="h4"
                fontSize="sm"
                textAlign="center"
                color="blue.800"
                mb="5px"
              >
                Instruçôes importantes
              </Heading>
              <Text color="pink">Peencha o formulário com cuidado!</Text>
              <Text color="pink">
                Os mapas que apresentarem erros de preenchimento incorreto, não
                serão refeitos, ou uma taxa será cobrada.
              </Text>
            </VStack>

            <VStack mt="10px" p="20px 0px">
              <Box>
                <Input
                  placeholder="Digite seu Nome"
                  type="text"
                  label="Whatsap de contato"
                  error={errors.name}
                  {...register("name")}
                />
                <Text fontSize="xs">
                  A astrólogia entrará em contato por esse número
                </Text>
              </Box>
              <Box>
                <Input
                  placeholder="Digite seu Nome"
                  type="text"
                  label="Nome completo"
                  error={errors.name}
                  {...register("name")}
                />
              </Box>
              <Box>
                <Input
                  placeholder="Digite seu CPF"
                  type="text"
                  label="CPF"
                  error={errors.name}
                  {...register("name")}
                />
              </Box>
              <Box>
                <Input
                  placeholder="dd/mm/aaaa"
                  type="text"
                  label="Data de nascimento"
                  error={errors.name}
                  {...register("name")}
                />
              </Box>
              <Box>
                <Input
                  placeholder="ex: 2 PM"
                  type="text"
                  label="Horário do nascimento"
                  error={errors.name}
                  {...register("name")}
                />
              </Box>
              <Box
                textAlign={["justify", "justify", "center", "center"]}
                border={`2px solid ${theme.colors.purple[800]}`}
                p="10px"
                boxShadow="md"
              >
                Coloque sempre AM ou PM no seu horário de nascimento. Se seu
                horário de nascimento for próximo do meio da tarde, coloque AM.
                Se seu horário de nascimento for próximo do meio dia ou meia
                noite, escrever por extenso o horário com os
                minutos(exemplo:meio dia e vinte ou meia noite e vinte). Se for
                hoŕario de verão, escrever conforme certidão de nascimento, NÂO
                retire a hora porque o sistema calculará automaticamente..
              </Box>
              <Box>
                <Input
                  placeholder="ex: São Paulo - SP"
                  type="text"
                  label="Cidade e estado onde nasceu"
                  error={errors.name}
                  {...register("name")}
                />
              </Box>
              <Box>
                <Text>
                  Cidade e estado onde estav no ultimo aniversário ou que stará
                  no próximo se estiver perto da data do aniversário
                </Text>
                <Input
                  placeholder="ex: São Paulo - SP"
                  type="text"
                  error={errors.name}
                  {...register("name")}
                />
              </Box>
              <Box>
                <Text>
                  Quer fazer pergunta ao astrólogo? se sim, coloque tudo que
                  quer saber aqui em baixo.
                </Text>
                <Textarea
                  isInvalid
                  rows={5}
                  // placeholder="Digite sua pergunta"
                  bg="white"
                  boxShadow="lg"
                />
              </Box>
              <Box
                textAlign={["justify", "justify", "center", "center"]}
                border={`2px solid ${theme.colors.purple[800]}`}
                boxShadow="md"
                p="10px"
              >
                <Text>
                  O astrólogo entrará em contato com você próximo a data de
                  entrega, lembrando que o prazo para você receber o mapa astral
                  é de até 20 dias.
                </Text>
                <Text>
                  NÃO ESQUEÇA de salvar seu mapa em um local seguro assim que
                  recebê-lo, porque não temos a cópia dele.
                </Text>
              </Box>
            </VStack>
          </Flex>
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
              onClick={() => history.push("/step2")}
            >
              FINALIZAR
              <ChevronRightIcon
                h="20px"
                w="20px"
                color="purple.800"
                border={`2px solid ${theme.colors.purple[800]}`}
                borderRadius="50%"
                marginLeft="10px"
              />
            </Button>
            <Text textAlign="center" fontSize="md">
              Você receberá um e-mail com os dados do seu agendamento.
            </Text>
          </VStack>
        </Flex>
      </Grid>
    </MotionContainer>
  );
};
