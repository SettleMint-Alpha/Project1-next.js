import React, { useState } from 'react';

const Home = () => {
  // Declare a state variable to store the form submission status
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Access the form elements and their values
    const form = event.target;
    const elements = form.elements;
    const name = elements.name.value;
    const email = elements.email.value;
    const phone = elements.phone.value;
    const branch = elements.branch.value;
    const rollNo = elements.rollNo.value;
    const cgpa = elements.cgpa.value;

    // Send a POST request to the server with the form data
    const data = { name, email, phone, branch, rollNo, cgpa };
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    const response = await fetch('/api/submit', options);
    const result = await response.json();
    console.log(result);

    // Set the form submission status to true and reset the form
    setFormSubmitted(true);
    form.reset();
  };

  // Render the form
  return (
    <form onSubmit={handleSubmit}>
      {/* Render the form fields */}
      <div>
        <label>Name:</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" name="phone" />
      </div>
      <div>
        <label>Branch:</label>
        <input type="text" name="branch" />
      </div>
      <div>
        <label>Roll No:</label>
        <input type="text" name="rollNo" />
      </div>
      <div>
        <label>CGPA:</label>
        <input type="text" name="cgpa" />
      </div>
      <div>
        {/* Render the submit button for the form */}
        <input type="submit" value="Submit" />
      </div>
      {/* If the form has been successfully submitted, render a message */}
      {formSubmitted && <div>Form submitted!</div>}
    </form>
  );
};

export default Home;

