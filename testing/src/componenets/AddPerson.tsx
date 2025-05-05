import { ChangeEvent, useState } from "react";
import { ShowPersons } from "./ShowPerson";
import { Person } from "../models/Person";

export const AddPersons = () => {
  const [person, setPerson] = useState<Person>({
    id: 0,
    name: "",
    age: 0,
    happy: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "text") {
      setPerson({ ...person, [e.target.id]: e.target.value });
    }

    if (e.target.type === "number") {
      setPerson({ ...person, [e.target.id]: +e.target.value });
    }

    if (e.target.type === "checkbox") {
      setPerson({ ...person, [e.target.id]: e.target.checked });
    }
  };

  return (
    <>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={person.name}
          onChange={handleChange}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={person.age}
          onChange={handleChange}
        />
        <label htmlFor="happy">Emotion:</label>
        <input
          type="checkbox"
          id="happy"
          checked={person.happy}
          onChange={handleChange}
        />
        <button>Spara</button>
      </form>
      <ShowPersons />
    </>
  );
};
