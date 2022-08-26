export interface Formation {
  name: string;
  finished: boolean;
  topics?: string[];
  trainer?: Personn;
  students?: Personn[];
}

export interface Personn {
  firstname: string;
  lastname: string;
}
