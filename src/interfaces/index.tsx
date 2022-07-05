import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IProfessional {
  id: string;
  name: string;
  email: string;
  contact: string;
}

export interface ITime {
  id: string;
  duration: string;
}

export interface ITimeQuery {
  profId: string;
  day: string;
}

export interface IFormOfService {
  id: string;
  name: string;
}

export interface IClient {
  id: string;
  fullName: string;
  email: string;
  contact: string;
  cpf: string;
  birthDate: Date;
  timeOfBirth: string;
  question: string;
  birthCity: string;
  lastBirthdayCity: string;
}

export interface ICreateClient {
  fullName: string;
  email: string;
  contact: string;
  cpf: string;
  birthDate: string;
  timeOfBirth: string;
  question: string;
  birthCity: string;
  lastBirthdayCity: string;
}

export interface ICreateSchedule {
  day: string;
  formOfServiceId: string;
  timeId: string;
  professionalId: string;
  clientId: string;
}
