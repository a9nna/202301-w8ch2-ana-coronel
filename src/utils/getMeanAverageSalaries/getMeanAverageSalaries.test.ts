import {
  type ClientsStructure,
  type ClientStructure,
  type ClientMinimumAverageSalary,
  type ClientsMinimumAverageSalary,
} from "../../types";
import getClientsWithStablishAverageSalary from "../getClientsWithStablishAverageSalary/getClientsWithStablishAverageSalary";
import getMeanAverageSalaries from "./getMeanAverageSalaries";

describe("Given the getMeanAverageSalaries function", () => {
  describe("When it receives a list of 2 clients", () => {
    test("Then it should return the mean of all average balances obtained", () => {
      const expectedMean = 750;
      const firstClient: ClientMinimumAverageSalary = {
        dni: "12345678A",
        nameSurname: "Juan Pérez",
        averageBalance: 500,
      };
      const secondClient: ClientMinimumAverageSalary = {
        dni: "45678901C",
        nameSurname: "Luis Martín",
        averageBalance: 1000,
      };
      const clients: ClientsMinimumAverageSalary = [firstClient, secondClient];

      const obtainedMean = getMeanAverageSalaries(clients);

      expect(obtainedMean).toBe(expectedMean);
    });
  });
  describe("When it receives a list of clients from getClientsWithStablishAverageSalary function", () => {
    test("Then it should return the mean of all average salaries obtained", () => {
      const minimumAvarageSalary = 6000;
      const expectedMean = 500;

      const firstClient: ClientStructure = {
        dni: "12345678A",
        nameSurname: "Juan Pérez",
        avarageSalary: 500,
        maximumSalary: 20000,
        directDebitPayroll: true,
        telephoneNumbers: {
          mobile: 687654321,
        },
      };
      const secondClient: ClientStructure = {
        dni: "87654321B",
        nameSurname: "Ana García",
        avarageSalary: 5000,
        maximumSalary: 10000,
        directDebitPayroll: false,
        telephoneNumbers: {
          landline: 934567890,
          mobile: 698765432,
        },
      };
      const clients: ClientsStructure = [firstClient, secondClient];
      const clientsToMakeMeanOfAverageSalaries =
        getClientsWithStablishAverageSalary(clients, minimumAvarageSalary);

      const obtainedMean = getMeanAverageSalaries(
        clientsToMakeMeanOfAverageSalaries
      );

      expect(obtainedMean).toBe(expectedMean);
    });
  });
});
