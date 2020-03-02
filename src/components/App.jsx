import React, { useState } from "react";
var year = new Date().getFullYear();

function App() {
  // State
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  // On change
  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return {
        // Spread
        ...prevValue,
        [name]: value
      };
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
      <footer>Jordan Handy {year}</footer>
    </div>
  );
}

export default App;
