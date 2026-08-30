
import React, { useState } from "react";


const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ name, email, course });
    setName("")
    setEmail('')
    setCourse('')
  };

  return (
    <div className="container">
      <h1>Profile Form</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your mailId"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button type="submit">submit</button>
      </form>
      <div className="preview">
        <h2>live preview</h2>
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Course : {course}</p>
      </div>

    </div>
  );
};

export default App;

