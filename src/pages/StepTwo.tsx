import { MotionContainer } from "../components/MotionContainer";
import { Header } from "../components/Header";
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Steps } from "../components/Steps";
import { DatePicker } from "chakra-ui-date-input";
import { theme } from "../styles/theme";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";

export const StepTwo = () => {
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
          // border="2px solid #ccc"
        >
          <Heading as="h3" fontSize="md" textAlign="center">
            Escolha a data disponivel para o seu atendimento
          </Heading>

          <DatePicker
            placeholder="Date picker placeholder"
            name="date"
            onChange={(date: string) => console.log(date)}
            textAlign="center"
          />

          <Flex flexDir="column" bg="white" borderRadius="5px" p="10px">
            <Heading
              fontSize="sm"
              textAlign="center"
              color="purple.800"
              margin="10px 0"
            >
              21 de janeiro - Sexta-feira
            </Heading>

            <Grid
              // border="2px solid black"
              gap="20px"
              padding={["5px, 5px", "5px 10px", "5px 10px"]}
              gridTemplateColumns={["repeat(auto-fill, minmax(100px, 1fr))"]}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
                <GridItem
                  key={index}
                  border={`1px solid ${theme.colors.purple[800]}`}
                  borderRadius="5px"
                  p="5px"
                  color="blue.800"
                  textAlign="center"
                  fontWeight="bold"
                  boxShadow="md"
                >
                  {item}
                </GridItem>
              ))}
            </Grid>

            <Flex
              bg="pink"
              borderRadius="5px"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              p="5px"
              fontWeight="bold"
              marginTop="10px"
              boxShadow="sm"
            >
              Você escolheu
              <Text color="yellow" fontWeight="bold" margin="0 5px">
                21/01/2021
              </Text>
              das
              <Text color="yellow" fontWeight="bold" margin="0 5px">
                10:00-10:30
              </Text>
            </Flex>
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
              onClick={() => history.push("/step3")}
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
