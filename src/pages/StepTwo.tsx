import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MotionContainer } from "../components/MotionContainer";
import { Header } from "../components/Header";
import { Steps } from "../components/Steps";
import { DatePicker } from "chakra-ui-date-input";
import { theme } from "../styles/theme";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
import { useSchedule } from "../providers/schedule";
import { useState } from "react";
import { useTime } from "../providers/time";
import { ITime } from "../interfaces";

export const StepTwo = () => {
  const [day, setDay] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<ITime>({
    id: "",
    duration: "",
  });

  const history = useHistory();

  const { times, searchedTimes, searchTimes } = useTime();
  const { scheduleState, setScheduleState } = useSchedule();

  const handleSearch = (data: string) => {
    const searchData = { day: data, profId: scheduleState.professionalId };
    searchTimes(searchData).then(() => setDay(data));
  };

  const isAvailable = (time: ITime) => {
    return searchedTimes && searchedTimes.find((t) => t.id === time.id);
  };

  const handleSelectedTime = (time: ITime) => {
    if (isAvailable(time)) {
      setSelectedTime(time);
    }
  };

  const handleSteTwo = () => {
    if (day && selectedTime.id) {
      setScheduleState((prev) => ({
        ...prev,
        day: day,
        timeId: selectedTime.id,
      }));

      history.push("/stepThree");
    }
  };

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
          <Heading as="h3" fontSize="md" textAlign="center">
            Escolha a data disponivel para o seu atendimento
          </Heading>

          <DatePicker
            name="date"
            onChange={(date: string) => handleSearch(date)}
            textAlign="center"
            color="whitesmoke"
            fontWeight="bold"
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
              gap="20px"
              padding={["5px, 5px", "5px 10px", "5px 10px"]}
              gridTemplateColumns={["repeat(auto-fill, minmax(100px, 1fr))"]}
            >
              {times.map((time, key) => (
                <GridItem
                  key={key}
                  border={`1px solid ${theme.colors.purple[800]}`}
                  borderRadius="5px"
                  p="5px"
                  color="blue.800"
                  textAlign="center"
                  fontWeight="bold"
                  boxShadow="md"
                  transition="filter .4s linear "
                  onClick={() => handleSelectedTime(time)}
                  bg={isAvailable(time) ? "transparent" : "gray.200"}
                  _active={{ filter: "brightness(1.2)" }}
                  _hover={{
                    filter: "brightness(.9)",
                    cursor: `${isAvailable(time) ? "pointer" : "not-allowed"}`,
                    bg: `${isAvailable(time) && theme.colors.blue[50]}`,
                    boxShadow: "lg",
                  }}
                >
                  {time.duration}
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
              minH="35px"
            >
              {day && (
                <>
                  Você escolheu
                  <Text color="yellow" fontWeight="bold" margin="0 5px">
                    {day}
                  </Text>
                  {selectedTime.duration && "das"}
                  <Text color="yellow" fontWeight="bold" margin="0 5px">
                    {selectedTime.duration && selectedTime.duration}
                  </Text>
                </>
              )}
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
              onClick={() => handleSteTwo()}
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
