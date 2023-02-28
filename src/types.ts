export interface ClientStructure {
  dni: string;
  nameSurname: string;
  avarageSalary: number;
  maximumSalary: number;
  directDebitPayroll: boolean;
  telephoneNumbers: {
    landline?: number;
    mobile: number;
  };
}

export type ClientsStructure = ClientStructure[];
