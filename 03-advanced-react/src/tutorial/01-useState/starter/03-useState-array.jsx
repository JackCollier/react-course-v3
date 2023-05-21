import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    if (id.id === people.id) {
      setPeople(people.filter((x) => x.id !== id));
    }
  };
  const clearAll = () => {
    setPeople((people.length = 0));
  };
  return (
    <div>
      {people.map((ppl) => {
        const { id, name } = ppl;
        return (
          <div>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
          </div>
        );
      })}
      <button onClick={clearAll}>Clear</button>
    </div>
  );
};

export default UseStateArray;
