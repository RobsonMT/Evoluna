type Tobject = {
  [key: string]: string;
};

const months: Array<Tobject> = [
  { Jan: "Janeiro" },
  { Feb: "Fevereiro" },
  { Mar: "Março" },
  { Apr: "Abril" },
  { May: "Maio" },
  { Jun: "Junho" },
  { Jul: "Julho" },
  { Aug: "Agosto" },
  { Sep: "Setembro" },
  { Oct: "Outubro" },
  { Nov: "Novembro" },
  { Dec: "Dezembro" },
];

const weekDays: Array<Tobject> = [
  { Sun: "Domingo" },
  { Mon: "Segunda-feira" },
  { Tue: "Terça-feira" },
  { Wed: "Quarta-feira" },
  { Thu: "Quinta-feira" },
  { Fri: "Sexta-feira" },
  { Sat: "Sábado" },
];

const getArrValue = (arr: Array<Tobject>, name: string) => {
  let filteredArr = arr.find(function (v) {
    return name in v;
  });
  return !!filteredArr ? filteredArr[name] : null;
};

export const getCurrentDate = (date: Date) => {
  const dateStr = date.toString().slice(0, 10).split(" ").reverse();
  const output = `${dateStr[0]} de ${getArrValue(
    months,
    dateStr[1]
  )} - ${getArrValue(weekDays, dateStr[2])}`;
  return output;
};

export const formatDate = (date: Date) => {
  const dateToStr = date
    .toISOString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");
  return dateToStr;
};
