import { type ClientStructure, type ClientsStructure } from "../../types";
import getClientsDniWithLandline from "./getClientsDniWithLandline";

describe("Given the getClientsDniWithLandline function", () => {
  describe("When it receives a list of 2 clients", () => {
    test("Then it should return a list with the DNIs of the received clients that have landline phone number", () => {
      const firstClient: ClientStructure = {
        dni: "12345678A",
        nameSurname: "",
        avarageSalary: 500,
        maximumSalary: 20000,
        directDebitPayroll: true,
        telephoneNumbers: {
          mobile: 687654321,
        },
      };
      const secondClient: ClientStructure = {
        dni: "87654321B",
        nameSurname: "",
        avarageSalary: 5000,
        maximumSalary: 10000,
        directDebitPayroll: false,
        telephoneNumbers: {
          landline: 934567890,
          mobile: 698765432,
        },
      };
      const clients: ClientsStructure = [firstClient, secondClient];

      const expectedDnis = ["87654321B"];

      const dnis = getClientsDniWithLandline(clients);

      expect(dnis).toStrictEqual(expectedDnis);
    });
  });
});
