export interface Pagination {}

export interface BaseHttpResponse<T = any> {
  message: string;
  results: T;
  pagination: Pagination;
}

export enum RoleEnum {
  SuperAdmin = "SUPER ADMIN",
  Admin = "ADMIN",
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: RoleEnum;
}
