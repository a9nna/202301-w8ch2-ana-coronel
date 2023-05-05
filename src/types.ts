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

export interface ClientWithAverageBalance {
  dni: string;
  nameSurname: string;
  averageBalance: number;
}

type Coso = Pick<ClientStructure, "dni" | "nameSurname" | "avarageSalary">;

export type ClientsMinimumAverageSalary = ClientWithAverageBalance[];
export type ClientsStructure = ClientStructure[];
