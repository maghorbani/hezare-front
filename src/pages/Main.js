import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Main extends Component {
  state = {
    q: "",
  };
  static propTypes = {
    vJustify: PropTypes.string,
    q: PropTypes.string,
    onChangeInput: PropTypes.func,
    history: PropTypes.object,
  };
  static defaultProps = {
    vJustify: "center",
    q: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.q !== this.props.q && this.props.q !== null) {
      this.setState({ q: this.props.q });
    }
  }

  onChange = (e) => {
    const q = e.target.value;
    this.setState({ q });
    if (this.props.onChangeInput !== undefined) this.props.onChangeInput(q);
  };

  onSubmit = (e) => {
    e.preventDefault();
    /*    window.history.replaceState(
      null,
      "results for " + this.state.q,
      "search?q=" + this.state.q
	);*/
    if (this.state.q === "") {
      this.props.history.push("/");
    } else this.props.history.push("/search?q=" + this.state.q);
  };

  render() {
    const { vJustify } = this.props;
    const { q } = this.state;
    const height = vJustify === "center" ? "h-screen" : "";
    return (
      <div
        className={`pt-5 flex flex-col w-8/12 justify-${vJustify} items-center m-auto ${height}`}
      >
        <div className="text-3xl mb-2">
          <h1>Hezare</h1>
        </div>
        <div className="self-start">
          Search Engine | Free | Independent | Open Source
        </div>
        <div className="w-full mt-1">
          <form action="search" onSubmit={this.onSubmit}>
            <input
              value={q}
              className="w-full h-10 p-2 rounded-md shadow bg-white"
              type="text"
              placeholder="Search..."
              name="q"
              onChange={this.onChange}
            />
          </form>
        </div>
      </div>
    );
  }
}
