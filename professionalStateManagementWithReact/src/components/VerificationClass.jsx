import React, { Component } from "react";

import "@styles/components/verification.scss";

class VerificationClass extends Component {
  render() {
    return (
      <article className="verification">
        <h2 className="verification--title">{this.props.title}</h2>
        <p className="verification--text">{this.props.text}</p>
        <div className="verification--wrapper">
          <input
            className="verification--input"
            placeholder="Type here"
            name={this.props.name}
            type="text"
          />
          <button className="verification--button">{this.props.button}</button>
        </div>
      </article>
    );
  }
}

export { VerificationClass };
