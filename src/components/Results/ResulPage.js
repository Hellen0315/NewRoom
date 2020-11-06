import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarS from "../AppBar/AppBarS";
import Menu from "../Menu/Menu";
import Store from "../../redux/store";
import NewsList from "./NewList";
import EmptyNews from "./EmptyNews";
import { withRouter } from "react-router-dom";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: props.results
    };
    this.resultChanges = this.resultChanges.bind(this);
  }

  componentDidMount() {
    this.unsuscribe = Store.subscribe(this.resultChanges);
  }

  resultChanges() {
    const newResults = Store.getState();
    this.setState({ results: newResults });
  }

  componentWillUnmount() {
    this.unsuscribe();
  }

  render() {
    const { results } = this.state;
    const isEmpty = !(results && results.length !== 0);

    return (
      <Fragment>
        <CssBaseline />
        <AppBarS />
        <Menu position="static" />
        <div>{isEmpty ? <EmptyNews /> : <NewsList results={results} />}</div>
      </Fragment>
    );
  }
}

export default withRouter(Page);
