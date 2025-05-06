import { useState } from "react";
import { Person } from "../models/Person";
import { AddPersons } from "./AddPerson";
import { Persons } from "./Persons";

export const PersonsApp = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  const addPerson = (newPerson: Person) => {
    setPersons([
      ...persons,
      new Person(newPerson.name, newPerson.age, newPerson.happy),
    ]);
  };

  const RemovePerson = () => {};

  console.log("Persons:", persons);

  return (
    <>
      <AddPersons addPerson={addPerson} />
      <Persons />
    </>
  );
};
