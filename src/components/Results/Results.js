import React, { Component } from "react";
import { connect } from "react-redux";
import Page from "./ResulPage";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { results } = this.props;

    return <Page results={results} />;
  }
}

const mapStateToProps = (state) => ({
  results: state.results
});

export default connect(mapStateToProps)(Results);
