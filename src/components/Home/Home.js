import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import findHome from "../../redux/actions/findHome";
import HomePage from "./HomePage";

class Home extends Component {
  componentDidMount() {
    this.props.findHome();
  }

  onChangeText = () => {
    const { findHome, history } = this.props;
    history.push("/results");
    findHome();
  };

  render() {
    return <HomePage onChangeText={this.onChangeText} />;
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home,
    results: state.results
  };
};
const mapDispatchToProps = {
  findHome
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
