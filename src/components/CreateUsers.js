import React, { Fragment, useState } from "react";

const { v4: uuidv4 } = require("uuid");

const Form = () => {
  const [user, updateUser] = useState({
    name: "",
    lastname: "",
    date: "",
    email: "",
    data: "",
  });
  const [error, updateError] = useState(false);
  const { name, lastname, date, email, data } = user;

  const handleChange = (e) => {
    updateUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      lastname.trim() === "" ||
      date.trim() === "" ||
      email.trim() === "" ||
      data.trim() === ""
    ) {
      updateError(true);
      return;
    }
    updateError(false);
    user.id = uuidv4();
    updateUser({
      name: "",
      lastname: "",
      date: "",
      email: "",
      data: "",
    });
  };
  return (
    <Fragment>
      <h2>Create User</h2>

      {error ? (
        <p className="alerta-error">Please complete all fields.</p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="u-full-width"
          onChange={handleChange}
          value={name}
        />
        <label>Last Name</label>

        <input
          type="text"
          name="lastname"
          className="u-full-width"
          onChange={handleChange}
          value={lastname}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          className="u-full-width"
          onChange={handleChange}
          value={email}
        />
        <label>Data</label>
        <textarea
          name="data"
          className="u-full-width"
          onChange={handleChange}
          value={data}
        ></textarea>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <button type="submit" className="u-full-width button-primary">
                Add User
              </button>
            </div>
            <div className="one-half column">
              <a href="">
                <button type="button" className="u-full-width button-primary">
                  see all users
                </button>
              </a>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
