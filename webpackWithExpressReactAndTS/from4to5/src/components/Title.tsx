import React from "react";

type PropsTitle = {
  title: String;
};

const Title = ({ title }: PropsTitle) => <span>{title}</span>;

export default Title;
