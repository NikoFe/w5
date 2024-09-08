import React, { ReactNode } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";

interface Props {
  children: ReactNode;
  text: string;
  extra: string;
  bold: boolean;
}

const SideOption = ({ children, text, extra, bold = false }: Props) => {
  return (
    <div className="side-option">
      <div className="side-option-left">
        {children}
        {bold ? <strong>{text}</strong> : <p>{text}</p>}
      </div>
      {extra != null ? <p>{extra}</p> : <p></p>}
    </div>
  );
};

export default SideOption;
