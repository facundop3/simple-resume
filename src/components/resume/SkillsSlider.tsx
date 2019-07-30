import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import { SkillsSliderProps } from "./interfaces";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 200
  }
});

export default function SkillsSlider(props: SkillsSliderProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState<number | number[]>(props.percent);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        {props.skill}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
      </Grid>
    </div>
  );
}
