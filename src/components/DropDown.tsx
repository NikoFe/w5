import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DropDown = ({ children }: Props) => {
  return <div className="dropdown-1">{children}</div>;
};

export default DropDown;
