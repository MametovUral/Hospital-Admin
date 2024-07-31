export interface UserRole {
  label: string;
  role: Role;
}
export enum Role {
  HR = "hr",
  Doctor = "doctor",
  Patient = "patient",
  Registration = "registration",
  Bugalter = "bugalter",
}

export interface Ilogin {
  login: string;
  password: string;
}
