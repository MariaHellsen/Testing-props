import { Person } from "../models/Person";

type ShowPersonProps = {
  person: Person;
  removePerson: (id: number) => void;
};
export const ShowPerson = ({ person, removePerson }: ShowPersonProps) => {
  return (
    <>
      <div>
        <h3>{person.name}</h3>
        <p>{person.age}</p>
        {person.happy ? (
          <div className="happy"></div>
        ) : (
          <div className="notHappy"></div>
        )}
        <div className="buttons">
          <button
            onClick={() => {
              removePerson(person.id);
            }}
          >
            Ta bort
          </button>
        </div>
      </div>
    </>
  );
};
