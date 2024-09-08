import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  text: string;
  onSelect: () => void;
}

const ScrollableTop = ({ children, text, onSelect }: Props) => {
  return (
    <div
      className="scrollable-top"
      onClick={() => {
        onSelect();
      }}
    >
      {children}
      <p>{text}</p>
    </div>
  );
};

export default ScrollableTop;
