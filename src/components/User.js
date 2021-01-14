import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function getModalStyle() {
  return {
    left: "25%",
    top: "25%",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const User = ({ user, handleDelete }) => {
  const { name, lastname, date, email, data, id } = user;
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h4 id="simple-modal-title">Date of admission and Position </h4>
      <p id="simple-modal-description">
        {date} {data}
      </p>
      <Modal />
    </div>
  );

  return (
    <TableRow key={id}>
      <TableCell>{name}</TableCell>
      <TableCell>{lastname}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          className={classes.menuButton}
          color="primary"
          type="button"
          onClick={handleOpen}
        >
          Extra Info
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          user={user}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={() => handleDelete(id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default User;
