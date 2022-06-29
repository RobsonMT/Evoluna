import { Center, Heading, HStack, Text, VStack } from "@chakra-ui/react";

export const Steps = () => {
  return (
    <VStack spacing={8} marginTop="20px">
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
            fontSize="3xl"
            textShadow="lg"
            fontWeight="bold"
            bg="whiteSmoke"
            color="pink"
            borderRadius="50%"
            w="60px"
            h="60px"
            boxShadow={"0px 0px 5px rgba(0,0,0,0.5)"}
          >
            1
          </Center>
          <Text fontSize="xs" fontWeight={"bold"}>
            Validar sua compra
          </Text>
        </VStack>
        <VStack textAlign="center">
          <Center
            fontSize="3xl"
            textShadow="lg"
            fontWeight="bold"
            bg="pink"
            color="whiteSmoke"
            borderRadius="50%"
            w="60px"
            h="60px"
            boxShadow={"0px 0px 5px rgba(0,0,0,0.5)"}
          >
            2
          </Center>
          <Text fontSize="xs" fontWeight={"bold"}>
            Selecione a Data
          </Text>
        </VStack>
        <VStack textAlign="center">
          <Center
            fontSize="3xl"
            textShadow="lg"
            fontWeight="bold"
            bg="gray.200"
            color="gray.800"
            borderRadius="50%"
            w="60px"
            h="60px"
            boxShadow={"0px 0px 5px rgba(0,0,0,0.5)"}
          >
            3
          </Center>
          <Text fontSize="xs" fontWeight={"bold"}>
            Conferir e Finalizar
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};
