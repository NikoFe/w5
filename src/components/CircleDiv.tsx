import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface Props {
  onClick?: (str: string) => void;
  str?: string;
}

const CircleDiv = ({ children, onClick, str }: Props) => {
  return <div className="circle-div">{children}</div>;
};

export default CircleDiv;
