import React from "react";

interface Props {
  progress: Number;
}

const ProgressBar = ({ progress }: Props) => {
  return (
    <div className="outer-progress">
      <div className="inner-progress"></div>
    </div>
  );
};

export default ProgressBar;
