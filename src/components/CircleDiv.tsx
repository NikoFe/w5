import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CircleDiv = ({ children }: Props) => {
  return <div className="circle-div">{children}</div>;
};

export default CircleDiv;
