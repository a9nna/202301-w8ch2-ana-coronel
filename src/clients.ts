import { type ClientsStructure } from "./types";

const clients: ClientsStructure = [
  {
    dni: "12345678A",
    nameSurname: "Juan Pérez",
    avarageSalary: 500,
    maximumSalary: 20000,
    directDebitPayroll: true,
    telephoneNumbers: {
      mobile: 687654321,
    },
  },
  {
    dni: "87654321B",
    nameSurname: "Ana García",
    avarageSalary: 5000,
    maximumSalary: 10000,
    directDebitPayroll: false,
    telephoneNumbers: {
      landline: 934567890,
      mobile: 698765432,
    },
  },
  {
    dni: "45678901C",
    nameSurname: "Luis Martín",
    avarageSalary: 1000,
    maximumSalary: 30000,
    directDebitPayroll: true,
    telephoneNumbers: { mobile: 609876543 },
  },
  {
    dni: "23932746G",
    nameSurname: "Martin Martinez",
    avarageSalary: 4000,
    maximumSalary: 48000,
    directDebitPayroll: false,
    telephoneNumbers: { landline: 943378701, mobile: 698754732 },
  },
];

export default clients;
