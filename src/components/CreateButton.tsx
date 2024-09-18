import React from "react";
import { FaPencil } from "react-icons/fa6";

interface Props {
  onClick: () => void;
}

const CreateButton = ({ onClick }: Props) => {
  return (
    <button className="createButton" onClick={onClick}>
      <FaPencil className="i"></FaPencil>
      <p>Novo</p>
    </button>
  );
};

export default CreateButton;
