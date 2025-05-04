import { useState } from "react";
import { Person } from "../models/Person";
import { AddPersons } from "./AddPerson";
import { Persons } from "./Persons";

export const PersonsApp = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const addPerson = () => {};
  const RemovePerson = () => {};

  return (
    <>
      <AddPersons />
      <Persons />
    </>
  );
};
