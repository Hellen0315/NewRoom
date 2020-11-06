import React, { Component } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const styles = (theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

class HomeResul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " "
    };
    this.HomeChanges = this.HomeChanges.bind(this);
  }

  HomeChanges(newValue) {
    this.setState({ value: newValue });
  }

  render() {
    const { onChangeText, classes } = this.props;

    return (
      <div className={classes.root}>
        <BottomNavigation
          value={this.state.value}
          onChange={(event, newValue) => {
            this.props.history.go(`category/${newValue}`);
            onChangeText(newValue);
            this.HomeChanges(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction
            key="0"
            value="0"
            label="Home"
            icon={<RestoreIcon />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(HomeResul));
