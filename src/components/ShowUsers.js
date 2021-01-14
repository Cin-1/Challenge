import React, { Fragment, useEffect, useState } from "react";
import Axios from "axios";
import User from "./User";

const ShowUsers = () => {
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
    <Fragment>
      <h2>Users List</h2>
      {users.length === 0 ? (
        <p className="alerta-error">No users to display</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th scope="col">Name </th>
              <th scope="col">Last Name</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0
              ? "No users"
              : users.map((user) => (
                  <User key={user.id} user={user} handleDelete={handleDelete} />
                ))}
          </tbody>
        </table>
      )}
    </Fragment>
  );
};

export default ShowUsers;
