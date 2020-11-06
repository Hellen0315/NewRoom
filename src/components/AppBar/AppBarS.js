import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Page from "./AppPage";
import findResults from "../../redux/actions/findResults";

class AppBarS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeSelection = this.onChangeSelection.bind(this);
  }

  onChangeText(text) {
    this.setState({ text });
  }

  onChangeSelection(text) {
    const { findResults, match, history } = this.props;
    this.setState({ text });
    findResults(text);
    if (match.path !== "/results") {
      history.push("/results");
    }
  }

  render() {
    const { text } = this.state;

    return (
      <Page
        text={text}
        onChangeText={this.onChangeText}
        onChangeSelection={this.onChangeSelection}
      />
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = {
  findResults
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppBarS)
);
