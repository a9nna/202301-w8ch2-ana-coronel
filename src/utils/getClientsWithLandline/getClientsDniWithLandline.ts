import { type ClientsStructure } from "../../types";

const getClientsDniWithLandline = (clients: ClientsStructure): string[] =>
  clients
    .filter((client) => client.telephoneNumbers.landline)
    .map((client) => client.dni);

export default getClientsDniWithLandline;
