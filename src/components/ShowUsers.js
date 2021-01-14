import React, { Fragment, useEffect, useState } from "react";
import Axios from "axios";
import User from "./User";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ShowUsers = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const handleDelete = (id) => {
    try {
      const url = "http://localhost:4000/users";
      Axios.delete(url + `/${id}`);
      const usersD = users.filter((user) => user.id !== id);
      setUsers(usersD);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const loadUsers = async () => {
      const url = "http://localhost:4000/users";
      const datauser = await Axios.get(url);
      setUsers(datauser.data);
    };
    loadUsers();
  }, [users.id]);

  return (
    <TableContainer component={Paper}>
      <h2>Users List</h2>
      {users.length === 0 ? (
        <p className="alerta-error">No users to display</p>
      ) : (
        <Table className={classes.table} aria-label="simple table">
          {" "}
          <TableHead>
            {" "}
            <TableRow>
              {" "}
              <TableCell>Name </TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>{" "}
          </TableHead>{" "}
          <TableBody>
            {users.length === 0
              ? "No users"
              : users.map((user) => (
                  <User key={user.id} user={user} handleDelete={handleDelete} />
                ))}
          </TableBody>{" "}
        </Table>
      )}
    </TableContainer>
  );
};

export default ShowUsers;
