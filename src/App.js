import React, { Component } from "react";
import Main from "./pages/Main";
import Results from "./pages/Results";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

export default class App extends Component {
  history = createBrowserHistory();
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      local_q: "",
    };
  }
  componentDidMount() {
    const url = new URL(window.location.href);
    const q = url.searchParams.get("q");
    this.setState({ q, local_q: q });
    if (q === null) {
      this.history.push("/");
    }
  }

  onChangeInput = (newText) => {
    this.setState({ local_q: newText });
  };

  render() {
    return (
      <Router history={this.history}>
        <Switch>
          <Route exact path="/">
            <Main history={this.history} onChangeInput={this.onChangeInput} />
          </Route>
          <Route path="/search">
            <Main
              history={this.history}
              vJustify="start"
              q={this.state.q}
              onChangeInput={this.onChangeInput}
            />
            <div className="flex flex-col justify-start h-full items-center m-auto w-8/12">
              <div className="mt-3 self-start">Results:</div>
              <div className="w-full border h-0 mb-1"></div>
              <Results />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}
