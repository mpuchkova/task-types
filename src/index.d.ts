type TPerson = {
  name: string;
  age: number;
  gender: 'male' | 'female';
};
export function getPersons(): TPerson[];

type TEmployee = TPerson & { company: string };

export function personToString(person: TPerson | TEmployee): string;