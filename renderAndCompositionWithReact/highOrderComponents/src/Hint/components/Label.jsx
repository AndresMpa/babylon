import React from "react";

const Label = (props) => <p className={props.class}>{!props.loading && props.text}</p>;

export default Label;
