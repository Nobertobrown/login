import React, { useState } from "react";

function App() {
  const [fullName, changeFullname] = useState({
    fName: "",
    lName: "",
    eMail: "",
  });

  const [headingText, setHeadingText] = useState({
    fName: "",
    lName: "",
    eMail: "",
  });

  function updateFullname(event) {
    const { name, value } = event.target;

    setHeadingText((prevValue) => {
      return { ...prevValue, [name]: value };
    });

    changeFullname((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleClick(event) {
    setHeadingText(fullName);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {headingText.fName} {headingText.lName}
      </h1>
      <p>{headingText.eMail}</p>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          onChange={updateFullname}
          value={fullName.fName}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={updateFullname}
          value={fullName.lName}
          placeholder="Last Name"
        />
        <input
          name="eMail"
          onChange={updateFullname}
          value={fullName.eMail}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
