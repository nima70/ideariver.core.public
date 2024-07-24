export interface IPaginationQuery {
  page?: number;
  limit?: number;
}

export interface IPaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  last_page: number;
}
export interface IErrorResponse {
  message: string;
  error?: any;
}
