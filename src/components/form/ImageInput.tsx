import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(1)
    },
    sizeSlider: {
      width: 250
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  })
);

const ImageInput = (props: any) => {
  const { handleImageChange, size, setSize } = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
        onChange={handleImageChange}
      />
      <label htmlFor="raised-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Add Picture
        </Button>
      </label>
      <div style={{ marginLeft: "1em" }}>
        <Typography id="continuous-slider" gutterBottom>
          Picture size
        </Typography>
        <Grid className={classes.sizeSlider}>
          <Slider
            value={size}
            onChange={setSize}
            aria-labelledby="continuous-slider"
          />
        </Grid>
      </div>
    </div>
  );
};

export default ImageInput;
