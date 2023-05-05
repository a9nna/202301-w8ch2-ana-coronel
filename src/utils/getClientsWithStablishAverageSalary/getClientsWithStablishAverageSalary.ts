import {
  type ClientsMinimumAverageSalary,
  type ClientsStructure,
} from "../../types.js";

const getClientsWithStablishAverageSalary = (
  clients: ClientsStructure,
  salary: number
): ClientsMinimumAverageSalary =>
  clients
    .filter(
      (client) => client.directDebitPayroll && client.avarageSalary < salary
    )
    .map(({ dni, avarageSalary, nameSurname }) => ({
      dni,
      nameSurname,
      averageBalance: avarageSalary,
    }));

export default getClientsWithStablishAverageSalary;
