import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(
  createStyles({
    card: {
      minWidth: "400px",
      width: "100%",
      display: "flex"
    },
    pos: {
      marginBottom: 12
    }
  })
);

export default function SimpleCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Position
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          From - To
        </Typography>
        <Typography variant="body2" component="p">
          Job Description
        </Typography>
      </CardContent>
    </Card>
  );
}
