import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  text: string;
}

const File = ({ text, children }: Props) => {
  return (
    <div className="file">
      {children}
      <p>{text}</p>
    </div>
  );
};

export default File;
