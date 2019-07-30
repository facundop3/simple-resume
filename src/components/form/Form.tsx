import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ResumeData } from "../../context/interfaces";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "block",
      width: "50%"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    menu: {
      width: 200
    },
    button: {
      margin: theme.spacing(1)
    }
  })
);

export default function OutlinedTextFields(props: {
  formData: ResumeData;
  handleChange: (e: any) => any;
}) {
  const classes = useStyles();

  const {
    formData: { fullName, jobTitle, email, adress },
    handleChange
  } = props;

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          label="Full Name"
          className={classes.textField}
          value={fullName}
          onChange={handleChange("fullName")}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="jobTitle"
          className={classes.textField}
          value={jobTitle}
          onChange={handleChange("jobTitle")}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          value={email}
          onChange={handleChange("email")}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="adress"
          className={classes.textField}
          value={adress}
          onChange={handleChange("adress")}
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <Button variant="contained" color="primary" className={classes.button}>
          + Experience
        </Button>
      </div>
      {/* <TextField
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax="4"
        value={values.multiline}
        onChange={handleChange("multiline")}
        className={classes.textField}
        margin="normal"
        helperText="hello"
        variant="outlined"
      /> */}
    </form>
  );
}
