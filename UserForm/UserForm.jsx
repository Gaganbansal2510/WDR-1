import React, { useState } from "react";

function UserForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData); // pass data to parent (App.jsx)
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>
        <div>
          <label>Phone: </label>
          <input type="text" name="phone" onChange={handleChange} required />
        </div>
        <div>
          <label>City: </label>
          <input type="text" name="city" onChange={handleChange} required />
        </div>
        <div>
          <label>Country: </label>
          <input type="text" name="country" onChange={handleChange} required />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
