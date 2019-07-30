import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ResumeData } from "../../interfaces";
import Button from "@material-ui/core/Button";
import AddExperienceFrorm from "./AddExpirienceForm";
import ImageInput from "./ImageInput";

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
  handleImageChange: (value: string) => any;
}) {
  const classes = useStyles();

  const {
    formData: { fullName, jobTitle, email, adress },
    handleChange,
    handleImageChange
  } = props;
  const [showAddExpirience, setShowAddExperience] = useState<boolean>(false);

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <h4>Complete your data and export your resume</h4>
      <div>
        <TextField
          label="Full Name"
          className={classes.textField}
          value={fullName}
          onChange={handleChange("fullName")}
          margin="normal"
          variant="outlined"
        />
        <ImageInput handleImageChange={handleImageChange} />
        <TextField
          label="Job Title"
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
          label="Adress"
          className={classes.textField}
          value={adress}
          onChange={handleChange("adress")}
          margin="normal"
          variant="outlined"
        />
      </div>
      {showAddExpirience && <AddExperienceFrorm />}
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => setShowAddExperience(!showAddExpirience)}
        >
          + Experience
        </Button>
      </div>
    </form>
  );
}
