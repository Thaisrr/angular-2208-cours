export interface User {
  id: number;
  name: string;
  email: string;
  company: Company;
}

export interface Company {
  name: string;
  catchPhrase: string;
}
