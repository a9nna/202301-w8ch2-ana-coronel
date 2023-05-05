import {
  type ClientsMinimumAverageSalary,
  type ClientsStructure,
  type ClientStructure,
} from "../../types";
import getClientsWithStablishAverageSalary from "./getClientsWithStablishAverageSalary";

describe("Given the getClientsWithStablishAverageSalary function", () => {
  describe("When it receives a list of 2 clients and a minimum average salary of 2000€", () => {
    test("Then it should return the clients of the received list that have a direct debit payroll and a average salary less than received", () => {
      const minimumAvarageSalary = 2000;
      const juan: ClientStructure = {
        dni: "12345678A",
        nameSurname: "Juan Pérez",
        avarageSalary: 500,
        maximumSalary: 20000,
        directDebitPayroll: true,
        telephoneNumbers: {
          mobile: 687654321,
        },
      };
      const ana: ClientStructure = {
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

      const clients: ClientsStructure = [juan, ana];
      const expectedClients: ClientsMinimumAverageSalary = [
        {
          dni: juan.dni,
          nameSurname: juan.nameSurname,
          averageBalance: juan.avarageSalary,
        },
      ];

      const selectedClients = getClientsWithStablishAverageSalary(
        clients,
        minimumAvarageSalary
      );

      expect(selectedClients).toStrictEqual(expectedClients);
    });
  });
});
