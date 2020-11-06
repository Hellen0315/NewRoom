import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import findCategory from "../../redux/actions/findCategory";
import MenuPage from "./MenuPage";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }

  onChangeText = (id) => {
    this.setState({ id });
    this.onChangeSelection(id);
  };

  onChangeSelection = (id) => {
    const { findCategory } = this.props;
    this.setState({ id });
    findCategory(id);
  };

  render() {
    return <MenuPage onChangeText={this.onChangeText} />;
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.category,
    results: state.results
  };
};
const mapDispatchToProps = {
  findCategory
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));
