import clients from "./clients.js";
import getClientsDniWithLandline from "./utils/getClientsWithLandline/getClientsDniWithLandline.js";
import getClientsWithStablishAverageSalary from "./utils/getClientsWithStablishAverageSalary/getClientsWithStablishAverageSalary.js";
import getMeanAverageSalaries from "./utils/getMeanAverageSalaries/getMeanAverageSalaries.js";

const minimumSalary = 5000;

getClientsDniWithLandline(clients);

const clientsWithStablishAverageSalary = getClientsWithStablishAverageSalary(
  clients,
  minimumSalary
);

const meanAvarageSalaries = getMeanAverageSalaries(
  clientsWithStablishAverageSalary
);

console.log(
  `El saldo medio promedio de los clientes con nómina y con saldo medio menor a ${minimumSalary}€ es: ${meanAvarageSalaries}€`
);
