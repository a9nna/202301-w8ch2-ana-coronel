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

export interface ClientMinimumAverageSalary {
  dni: string;
  nameSurname: string;
  averageBalance: number;
}

export type ClientsMinimumAverageSalary = ClientMinimumAverageSalary[];
export type ClientsStructure = ClientStructure[];
