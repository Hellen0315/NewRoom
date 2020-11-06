import React, { Component } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountBalance from "@material-ui/icons/AccountBalance";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Home from "../Home/Home";

const styles = (theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

class CategoryResul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " "
    };
    this.categoryChanges = this.categoryChanges.bind(this);
  }

  categoryChanges(newValue) {
    this.setState({ value: newValue });
  }

  render() {
    const { onChangeText } = this.props;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <BottomNavigation
          value={this.state.value}
          onChange={(event, newValue) => {
            console.log(this.props);
            this.props.history.push(`/category/${newValue}`);
            onChangeText(newValue);
            this.categoryChanges(newValue);
          }}
          showLabels
        >
          <Home />
          <BottomNavigationAction
            key="1"
            value="1"
            label="Política"
            icon={<AccountBalance />}
          />
          <BottomNavigationAction
            key="2"
            value="2"
            label="Internacionales"
            icon={<AirplanemodeActiveIcon />}
          />
          <BottomNavigationAction
            key="3"
            value="3"
            label="Tecnología"
            icon={<DesktopMacIcon />}
          />
          <BottomNavigationAction
            key="4"
            value="4"
            label="Espectáculos"
            icon={<AddAPhotoIcon />}
          />
          <BottomNavigationAction
            key="5"
            value="5"
            label="Deportes"
            icon={<DirectionsBikeIcon />}
          />
          <BottomNavigationAction
            key="6"
            value="6"
            label="Diseño"
            icon={<FilterVintageIcon />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default withRouter(
  withStyles(styles, { withTheme: true })(CategoryResul)
);
