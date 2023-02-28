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
    .map((client) => ({
      dni: client.dni,
      nameSurnames: client.nameSurname,
      averageBalance: client.avarageSalary,
    }));

export default getClientsWithStablishAverageSalary;
