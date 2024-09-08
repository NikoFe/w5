import React, { PropsWithChildren, ReactNode } from "react";
import { FaRegSquare } from "react-icons/fa";

import { PiArrowFatRightLight } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import File from "./File";

interface Props {
  sender: string;
  children: ReactNode;
  date: string;
  clip: boolean;
}

const Mail = ({ sender, children, date, clip }: Props) => {
  return (
    <div className="mail">
      <div className="mail-left">
        <FaRegSquare></FaRegSquare>
        <FaRegStar></FaRegStar>
        <PiArrowFatRightLight></PiArrowFatRightLight>
        <p> {sender}</p>
      </div>
      <div className="mail-content">{children}</div>
      <p className="mail-date">{date}</p>
    </div>
  );
};

export default Mail;
