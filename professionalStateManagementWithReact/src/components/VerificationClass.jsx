import React, { Component } from "react";

import "@styles/components/verification.scss";

class VerificationClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      loading: false,
    };
  }

  componentDidUpdate() {
    // Fake backend behaviour
    if (this.state.loading) {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 2000);
    }
  }

  render() {
    return (
      <article className="verification">
        <h2 className="verification--title">{this.props.title}</h2>
        <p className="verification--text">{this.props.text}</p>

        {this.state.error && (
          <p
            className="verification--text"
            onClick={() =>
              this.setState((previousState) => ({
                error: !previousState.error,
              }))
            }
          >
            Ups... There's an error, click here, please
          </p>
        )}

        {this.state.loading && <p className="verification--text">Loading...</p>}

        <div className="verification--wrapper">
          <input
            className="verification--input"
            placeholder="Type here"
            name={this.props.name}
            type="text"
          />
          <button
            className="verification--button"
            disabled={this.state.error}
            onClick={() => this.setState({ loading: true })}
          >
            {this.props.button}
          </button>
        </div>
      </article>
    );
  }
}

export { VerificationClass };
