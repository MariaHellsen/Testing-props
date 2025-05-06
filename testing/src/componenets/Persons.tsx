import { Person } from "../models/Person";
import { ShowPerson } from "./ShowPerson";

type PersonsProps = {
  persons: Person[];
  removePerson: (id: number) => void;
};

export const Persons = ({ persons, removePerson }: PersonsProps) => {
  return (
    <>
      {persons.map((p) => (
        <ShowPerson person={p} key={p.id} removePerson={removePerson} />
      ))}
    </>
  );
};
