import React, { PropsWithChildren, ReactNode } from "react";
import { FaRegSquare } from "react-icons/fa";
import { IoArchive, IoTrash } from "react-icons/io5";
import { FaEnvelope, FaClock } from "react-icons/fa6";
import CircleDiv from "./CircleDiv";

import { PiArrowFatRightLight } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import File from "./File";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  sender: string;
  children: ReactNode;
  date: string;
  clip: boolean;
  mailKey: string;
}

const Mail = ({ sender, children, date, clip, mailKey }: Props) => {
  const navigate = useNavigate();

  function deleteMail(key: string) {
    const deleting = async () => {
      const res = await fetch(`http://localhost:8000/jobs/${key}`, {
        method: "DELETE",
      });
      return;
    };
    deleting();
    alert("deleted");
    return navigate("/");
  }

  return (
    <>
      <div className="mail">
        <div className="mail-left">
          <FaRegSquare></FaRegSquare>
          <FaRegStar></FaRegStar>
          <PiArrowFatRightLight></PiArrowFatRightLight>
          <p> {sender}</p>
        </div>
        <div className="mail-content">{children}</div>
        <p className="mail-date">{date}</p>

        <div className="mail-extras">
          <CircleDiv>
            <IoArchive></IoArchive>
          </CircleDiv>
          <div
            onClick={() => {
              deleteMail(mailKey);
            }}
          >
            <CircleDiv>
              <IoTrash></IoTrash>
            </CircleDiv>
          </div>
          <CircleDiv>
            <FaEnvelope></FaEnvelope>
          </CircleDiv>
          <CircleDiv>
            <FaClock></FaClock>
          </CircleDiv>
        </div>

        <Link to={`/details/${mailKey}`} className="mail-background">
          <div className="mail-background"></div>
        </Link>
      </div>
    </>
  );
};

export default Mail;
