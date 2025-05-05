import { ShowPersons } from "./ShowPerson";

export const AddPersons = () => {
  return (
    <>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" />
        <label htmlFor="happy">Emotion:</label>
        <input type="checkbox" id="happy" />
        <button>Spara</button>
      </form>
      <ShowPersons />
    </>
  );
};
