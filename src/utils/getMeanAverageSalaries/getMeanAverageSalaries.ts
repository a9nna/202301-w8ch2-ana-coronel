import { type ClientsMinimumAverageSalary } from "../../types";

const getMeanAverageSalaries = (
  clients: ClientsMinimumAverageSalary = []
): number =>
  clients.reduce(
    (total, number, index, clients) =>
      total + number.averageBalance / clients.length,
    0
  );

export default getMeanAverageSalaries;
