import {
  Center,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

interface IStepsProps {
  step: number;
}

export const Steps = ({ step }: IStepsProps) => {
  return (
    <VStack spacing={8}>
      <Heading
        fontSize="xl"
        textTransform="uppercase"
        textAlign="center"
        textShadow="lg"
      >
        Siga os passos para concluir o seu agendamento
      </Heading>
      <HStack spacing={10} display={"flex"} justifyContent="center">
        <VStack textAlign="center">
          <Center
            bg={step === 1 ? "pink" : "white"}
            color={step === 1 ? "white" : "pink"}
            fontSize="3xl"
            textShadow="lg"
            fontWeight="bold"
            borderRadius="50%"
            w="60px"
            h="60px"
            boxShadow={useColorModeValue(
              "0px 0px 5px rgba(0,0,0,0.5)",
              "0px 0px 5px rgba(255,255,255,0.5)"
            )}
          >
            1
          </Center>
          <Text
            color={useColorModeValue("gray.800", "white")}
            fontSize="xs"
            fontWeight={"bold"}
          >
            Validar sua compra
          </Text>
        </VStack>
        <VStack textAlign="center">
          <Center
            bg={step === 1 ? "gray.200" : step === 2 ? "pink" : "white"}
            color={step === 1 ? "gray.800" : step === 2 ? "white" : "pink"}
            fontSize="3xl"
            textShadow="lg"
            fontWeight="bold"
            borderRadius="50%"
            w="60px"
            h="60px"
            boxShadow={"0px 0px 5px rgba(0,0,0,0.5)"}
          >
            2
          </Center>
          <Text
            color={useColorModeValue("gray.800", "white")}
            fontSize="xs"
            fontWeight={"bold"}
          >
            Selecione a Data
          </Text>
        </VStack>
        <VStack textAlign="center">
          <Center
            bg={step === 3 ? "pink" : "gray.200"}
            color={step === 3 ? "white" : "gray.800"}
            fontSize="3xl"
            textShadow="lg"
            fontWeight="bold"
            borderRadius="50%"
            w="60px"
            h="60px"
            boxShadow={"0px 0px 5px rgba(0,0,0,0.5)"}
          >
            3
          </Center>
          <Text
            color={useColorModeValue("gray.800", "white")}
            fontSize="xs"
            fontWeight={"bold"}
          >
            Conferir e Finalizar
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};
