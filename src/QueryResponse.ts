import { IAddress, IFilings, IFormerName, ICompany } from "./SecEdgar";
export interface IPaginationQuery {
  page?: number;
  limit?: number;
}

export interface IPaginatedCompanyResponse {
  data: ICompany[];
  total: number;
  page: number;
  last_page: number;
}
export interface IErrorResponse {
  message: string;
  error?: any;
}
