import React, { ReactNode } from "react";
import { FaCaretDown } from "react-icons/fa6";
import DropDown from "./DropDown";

interface Props {
  text: string;
  dropdown: boolean;
  children: ReactNode;
  onClick: (str: string) => void;
  paramater: string;
  arrow: boolean;
}

const Button1 = ({
  text,
  dropdown,
  children,
  onClick,
  paramater,
  arrow,
}: Props) => {
  return (
    <button
      className="button-1"
      onClick={() => {
        onClick(paramater);
      }}
    >
      <p>{text}</p>
      {arrow && <FaCaretDown></FaCaretDown>}
      {dropdown && <DropDown>{children}</DropDown>}
    </button>
  );
};

export default Button1;
