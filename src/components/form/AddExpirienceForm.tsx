import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ResumeData, WorkExpreience } from "../../interfaces";
import Button from "@material-ui/core/Button";
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

export default function OutlinedTextFields(props: any) {
  const classes = useStyles();
  const [experienceData, setExperienceData] = useState<WorkExpreience>({
    position: "",
    since: "",
    to: "",
    description: ""
  });
  return (
    <React.Fragment>
      <div>
        <TextField
          label="Position"
          className={classes.textField}
          //   value={experienceData.position}
          //   onChange={handleChange("position")}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Since"
          className={classes.textField}
          //   value={experienceData.since}
          //   onChange={handleChange("since")}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="To"
          className={classes.textField}
          //   value={experienceData.to}
          //   onChange={handleChange("to")}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          rowsMax="4"
          //   value={experienceData.description}
          //   onChange={handleChange("description")}
          className={classes.textField}
          margin="normal"
          helperText="Do important "
          variant="outlined"
        />
      </div>
      <div>
        <Button variant="contained" color="primary" className={classes.button}>
          Add
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Cancel
        </Button>
      </div>
    </React.Fragment>
  );
}
