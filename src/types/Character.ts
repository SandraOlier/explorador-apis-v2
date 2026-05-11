export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  gender?: string;
  type?: string;
  origin?: { name: string };
  location?: { name: string };
  episode?: string[];
}

