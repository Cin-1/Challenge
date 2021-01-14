import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Axios from "axios";
const { v4: uuidv4 } = require("uuid");

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    borderRadius: "1rem",
    padding: "1rem",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Form = () => {
  const classes = useStyles();

  const [user, setUser] = useState({
    name: "",
    lastname: "",
    date: "",
    email: "",
    data: "",
  });
  const [error, setError] = useState(false);
  const { name, lastname, date, email, data } = user;
  const [newuser, setNewUser] = useState({});

  const handleChange = (e) => {
    setUser({
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
      setError(true);
      return;
    }
    setError(false);
    user.id = uuidv4();
    setUser({
      name: "",
      lastname: "",
      date: "",
      email: "",
      data: "",
    });
    setNewUser(user);
  };
  useEffect(() => {
    const addUser = async () => {
      const url = "http://localhost:4000/users";
      if (Object.keys(newuser).length === 6) {
        try {
          await Axios.post(url, newuser);
        } catch (err) {
          console.log(err);
        }
      }
    };
    addUser();
  }, [newuser]);
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create User{" "}
        </Typography>

        {error ? (
          <p className="alerta-error">Please complete all fields.</p>
        ) : null}
        <div>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              type="text"
              label="Name"
              name="name"
              onChange={handleChange}
              value={name}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label=" Last Name"
              type="text"
              name="lastname"
              onChange={handleChange}
              value={lastname}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              type="date"
              name="date"
              onChange={handleChange}
              value={date}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label=" Email"
              type="text"
              name="email"
              onChange={handleChange}
              value={email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label=" Data"
              name="data"
              onChange={handleChange}
              value={data}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add User
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Form;
