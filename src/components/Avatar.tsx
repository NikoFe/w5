import React from "react";

interface Props {
  text: string;
  color: string;
}

const Avatar = ({ text, color }: Props) => {
  const divStyle = {
    backgroundColor: color, // Apply the color passed via props
  };

  return (
    <div className="avatar" style={divStyle}>
      <p>{text}</p>
    </div>
  );
};

export default Avatar;
