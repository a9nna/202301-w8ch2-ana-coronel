import clients from "./clients.js";
import getClientsDniWithLandline from "./utils/getClientsWithLandline/getClientsDniWithLandline.js";
import getClientsWithStablishAverageSalary from "./utils/getClientsWithStablishAverageSalary/getClientsWithStablishAverageSalary.js";

getClientsDniWithLandline(clients);
getClientsWithStablishAverageSalary(clients, 5000);
