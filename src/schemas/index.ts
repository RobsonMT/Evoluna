import * as yup from "yup";
import {
  birthDateRegex,
  cpfRegex,
  phoneRegex,
  timeAMPMRegex,
} from "../validations";

export const stepOneSchema = yup.object().shape({
  email: yup
    .string()
    .required("E-mail obrigatório. Ex: nome@email.com.")
    .email("E-mail inválido"),
  formOfServiceId: yup.string().required(),
  professionalId: yup.string().required(),
});

export const stepThreeSchema = yup.object().shape({
  fullName: yup
    .string()
    .required()
    .max(50, "Must have a maximum of 50 characters"),
  contact: yup
    .string()
    .required()
    .matches(
      phoneRegex,
      "Phone number format is not valid. EX: (99) 99999-9999"
    ),
  cpf: yup
    .string()
    .required()
    .matches(cpfRegex, "Cpf number format is not valid. EX: 000.000.000-00"),
  birthDate: yup
    .string()
    .required()
    .matches(birthDateRegex, "BirthDate format is not valid. EX: 12/12/2012"),
  timeOfBirth: yup
    .string()
    .required()
    .matches(
      timeAMPMRegex,
      "BirthDate format is not valid. EX: 03:00 AM | 03:00 PM"
    ),
  question: yup.string().optional().nullable(),
  birthCity: yup.string().required(),
  lastBirthdayCity: yup.string().required(),
});
