import React, { useState } from "react";
import UserForm from "./userForm";
import DisplayData from "./displayData";

function App() {
  const [userData, setUserData] = useState({});

  const handleFormSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <h1>React Form Example</h1>
      <UserForm onFormSubmit={handleFormSubmit} />
      <hr />
      <DisplayData data={userData} />
    </div>
  );
}

export default App;