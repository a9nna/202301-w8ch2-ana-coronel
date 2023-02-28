import { type ClientsMinimumAverageSalary } from "../../types";

const getMeanAverageSalaries = (
  clients: ClientsMinimumAverageSalary = []
): number =>
  clients.reduce((total, number) => total + number.averageBalance, 0) /
  clients.length;

export default getMeanAverageSalaries;
