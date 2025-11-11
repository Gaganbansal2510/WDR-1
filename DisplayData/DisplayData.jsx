import React from "react";

function DisplayData({ data }) {
  if (!data.name) {
    return 
  }

  return (
    <div style={{ margin: "20px" }}>
      <h2>Submitted User Data</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Phone:</strong> {data.phone}</p>
      <p><strong>City:</strong> {data.city}</p>
      <p><strong>Country:</strong> {data.country}</p>
    </div>
  );
}

export default DisplayData;