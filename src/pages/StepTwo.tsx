import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { MotionContainer } from "../components/MotionContainer";
import { Header } from "../components/Header";
import { Steps } from "../components/Steps";
import { theme } from "../styles/theme";
import { useHistory } from "react-router-dom";
import { useSchedule } from "../providers/schedule";
import { useState } from "react";
import { useTime } from "../providers/time";
import { ITime } from "../interfaces";
import { formatDate, getCurrentDate } from "../utils";
import { DatePickerWrapper } from "../styles/datePicker";
import { Button } from "../components/Button";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export const StepTwo = () => {
  const { colorMode } = useColorMode();
  const colormode = colorMode;
  const history = useHistory();

  const initialState = { id: "", duration: "" };
  const [day, setDay] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<ITime>(initialState);

  const { times, searchedTimes, setSearchedTimes, searchTimes } = useTime();
  const { scheduleState, setScheduleState } = useSchedule();

  const handleSearch = (date: Date) => {
    setStartDate(date);
    const searchData = {
      day: formatDate(date),
      profId: scheduleState.professionalId,
    };
    searchTimes(searchData).then(() => setDay(formatDate(date)));
  };

  const isAvailable = (time: ITime) => {
    return searchedTimes && searchedTimes.find((t) => t.id === time.id);
  };

  const handleSelectedTime = (time: ITime) => {
    if (isAvailable(time)) {
      setSelectedTime(time);
    }
  };

  const resetOptions = () => {
    setSelectedTime(initialState);
    setStartDate(new Date());
    setSearchedTimes([]);
    setDay("");
  };

  const handleSteTwo = () => {
    if (day && selectedTime.id) {
      setScheduleState((prev) => ({
        ...prev,
        day: day,
        timeId: selectedTime.id,
      }));

      resetOptions();

      return history.push("/stepThree");
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
        <Steps step={2} />
        <Flex
          flexDir="column"
          gap="20px"
          marginTop="20px"
          padding={["20px 40px", "20px 40px", "20px", "20px"]}
          w={["100%", "100%", "50%", "50%"]}
          maxW={["100%", "100%", "500px", "500px"]}
        >
          <Heading as="h3" fontSize="md" textAlign="center">
            Escolha a data disponível para o seu atendimento
          </Heading>

          <DatePickerWrapper colorMode={colormode}>
            <DatePicker
              name="date"
              selected={startDate}
              onChange={(date: Date) => handleSearch(date)}
              dateFormat="dd/MM/yyyy"
            />
          </DatePickerWrapper>

          <Heading as="h3" fontSize="md" textAlign="center">
            Escolha o horário disponível para o seu atendimento
          </Heading>

          <Flex
            p="10px"
            flexDir="column"
            bg={useColorModeValue("white", "gray.800")}
            border="1px solid"
            borderColor={useColorModeValue("gray.200", "gray.800")}
            borderRadius="5px"
            boxShadow="md"
          >
            <Heading
              fontSize="sm"
              textAlign="center"
              color={useColorModeValue("gray.800", "whitesmoke")}
              margin="10px 0"
            >
              {startDate && getCurrentDate(startDate)}
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
                  bg={isAvailable(time) ? "whitesmoke" : "gray.200"}
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
              color="whitesmoke"
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
              model="primary"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding="5px 5px 5px 30px"
              onClick={handleSteTwo}
            >
              CONTINUAR
            </Button>
            <Button model="outlined" p="5px 30px" onClick={resetOptions}>
              ALTERAR
            </Button>
          </VStack>
        </Flex>
      </Grid>
    </MotionContainer>
  );
};
