
import { useState } from "react";

function AdvancedUseState() {
  const [num, setNum] = useState(0);

  const [user, setUser] = useState({
    name: "Narayan",
    age: 18
  });

  const [skills, setSkills] = useState(["HTML", "CSS"]);

  // Object update
  const updateAge = () => {
    setUser({ ...user, age: user.age + 1 });
  
    // user.age = user.age +1
    // setUser(user)
  };

  // Array update
  const addSkill = () => {
    setSkills([...skills, "React"]);
  };

  // Normal update - runs only once
  const normalUpdate = () => {
    setNum(num + 1);
    setNum(num + 1);
    setNum(num + 1);
  };

  // Functional update - runs three times
  const batchUpdate = () => {
    setNum(prev => prev + 1);
    setNum(prev => prev + 1);
    setNum(prev => prev + 1);
  };

  return (
    <div>
      <h1>Advanced useState</h1>

      <h2>Number: {num}</h2>

      <button onClick={normalUpdate}>  Normal +3 </button>
      <button onClick={batchUpdate}> Functional +3 </button>

      <hr />

      <h2>User Object</h2>

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      <button onClick={updateAge}>Increase Age </button>
      <hr />
      <h2>Skills Array</h2>

      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}

      <button onClick={addSkill}> Add React </button>
    </div>
  );
}

export default AdvancedUseState;

