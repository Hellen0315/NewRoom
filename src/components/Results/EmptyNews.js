import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(50),
      height: theme.spacing(45)
    }
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "20px"
  }
});
class EmptyNews extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography className={classes.title} variant="h6" component="h3">
          There are no results
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(EmptyNews);
