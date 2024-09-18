import React from "react";
import { FaCaretDown } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

const BlueButton = ({ onClick }: Props) => {
  return (
    <button className="blue-button" onClick={onClick}>
      <p>Pošlji</p>
      <FaCaretDown></FaCaretDown>
    </button>
  );
};

export default BlueButton;
