import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Holder = ({ children }: Props) => {
  return <div className="holder">{children}</div>;
};

export default Holder;
