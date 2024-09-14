import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  text: string;
  onSelect: () => void;
  changeSelected: () => void;
  selected: boolean;
}

const ScrollableTop = ({
  children,
  text,
  onSelect,
  changeSelected,
  selected,
}: Props) => {
  return (
    <>
      {selected ? (
        <div
          className="scrollable-top"
          onClick={() => {
            onSelect();
            changeSelected();
          }}
        >
          {children}
          <p>{text}</p>
        </div>
      ) : (
        <div
          className="scrollable-top-selected"
          onClick={() => {
            onSelect();
            changeSelected();
          }}
        >
          {children}
          <p>{text}</p>
        </div>
      )}
    </>
  );
};

export default ScrollableTop;
