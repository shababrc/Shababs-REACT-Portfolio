import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isNameRequired, setIsNameRequired] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === '') {
      setIsNameRequired(true);
    } else if (!validateEmail(email)) {
      setIsNameRequired(false);
      setIsEmailInvalid(true);
    } else {
      setIsNameRequired(false);
      setIsEmailInvalid(false);

      // Handle form submission
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);

      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const validateEmail = (email) => {
    // Basic email validation
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
          {isNameRequired && <p className="error">Name is required</p>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          {isEmailInvalid && <p className="error">Invalid email address</p>}
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea value={message} onChange={handleMessageChange}></textarea>
        </div>
        <button id = "submit" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
