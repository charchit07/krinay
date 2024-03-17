import React, { useState } from 'react';
import '../Styles/Registration.modules.css';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      name,
      last_name,
      email,
      password,
      phone,
    };
    fetch('https://real-pink-goose-slip.cyclic.app/users/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg==="New user has been registered") {
          alert(res.msg)
          navigate("/login")
        }else{
          alert(res.msg);
        }
      })
      .catch((err) => console.log(err));
    setName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setPhone('');
  };

  return (
    <div className="registration-container">
      <h2>Registration Page</h2>
      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="last_name">Last Name:</label>
        <input
          type="text"
          id="last_name"
          placeholder="Enter Last Name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="phone">Phone No:</label>
        <input
          type="text"
          id="phone"
          placeholder="Enter Phone No."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button className="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export { Register };
