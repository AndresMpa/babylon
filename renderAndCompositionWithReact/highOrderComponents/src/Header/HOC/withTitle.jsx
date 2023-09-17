import React from "react";

const withTitle = (WrappedComponent) => {
  const WrappedComponentWithGreeting = (greetings) => {
    const ComponentToRender = (props) => {
      return <WrappedComponent {...props} greeting={greetings} />;
    };
    return ComponentToRender;
  };
  return WrappedComponentWithGreeting;
};

export { withTitle };
