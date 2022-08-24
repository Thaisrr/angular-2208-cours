export interface Formation {
  name: string;
  finished: boolean;
  topics?: string[];
  trainer?: Personn;
  studiants?: Personn[];
}

export interface Personn {
  firstname: string;
  lastname: string;
}
