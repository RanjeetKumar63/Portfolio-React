import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Registered");
  }, [flag]);
  console.log(inputData);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are Mendatory");
    } else {
      setFlag(true);
    }
  }
  return (
    <div className="hdr">
      <pre className="pr">
        {flag ? (
          <h2 className="ui-defined">
            Hello {inputData.name},You've Registered Successfull 💐💐
          </h2>
        ) : (
          ""
        )}
      </pre>
      <h1 className="hire">Contact Me</h1>
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h2>Registration Form</h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={inputData.name}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your email"
            name="email"
            value={inputData.email}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Password"
            name="password"
            value={inputData.password}
            onChange={handleData}
          />
        </div>
        <div className="btm">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
