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

export const StepOne = () => {
  const history = useHistory();

  return (
    <MotionContainer>
      <Header />
      <Grid minH="100vh" justifyItems="center" alignItems="center">
        <Steps />
        <Flex
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
              placeholder="Digite aqui o email"
              textAlign="center"
              bg="whitesmoke"
              h="30px"
              borderRadius="15px"
              color="pink"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box>
            <Text fontSize="sm" fontWeight="bold" textAlign="center">
              Formato do atendimento
            </Text>
            <Select
              placeholder="Digite aqui o email"
              textAlign="center"
              bg="whitesmoke"
              h="30px"
              borderRadius="15px"
              color="pink"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box>
            <Text fontSize="sm" fontWeight="bold" textAlign="center">
              Insira o e-mail utilizado na compra
            </Text>
            <Select
              placeholder="Digite aqui o email"
              textAlign="center"
              bg="whitesmoke"
              h="30px"
              borderRadius="15px"
              color="pink"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
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
              onClick={() => history.push("/step2")}
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
            >
              ALTERAR
            </Button>
          </VStack>
        </Flex>
      </Grid>
    </MotionContainer>
  );
};
