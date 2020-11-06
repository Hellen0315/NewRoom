import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "../Autocomplete/Autocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
}));

function AppPage(props) {
  const { text, onChangeText, onChangeSelection } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Noticias
          </Typography>
          <Autocomplete
            text={text}
            onChangeText={onChangeText}
            onChangeSelection={onChangeSelection}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppPage;
