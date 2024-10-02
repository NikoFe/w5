import React, { ReactNode } from "react";
import { LuPrinter } from "react-icons/lu";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import Avatar from "./Avatar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { BsFillExclamationOctagonFill } from "react-icons/bs";

interface Props {
  children: ReactNode;
}

const Details = () => {
  const { id } = useParams();

  const [mail, setMail] = useState<any>(null);

  useEffect(() => {
    const fetchMail = async () => {
      try {
        const res = await fetch(`http://localhost:8000/jobs/${id}`);
        const data = await res.json();
        setMail(data);
      } catch (error) {
        console.log("ERROR FETCHING INDIVIDUAL " + error);
      }
    };

    fetchMail();
  });

  return (
    <div className="details-div">
      <div className="details-header">
        <div>
          <FaArrowLeft></FaArrowLeft>
          <BsFillExclamationOctagonFill></BsFillExclamationOctagonFill>
          <BsFillExclamationOctagonFill></BsFillExclamationOctagonFill>
          <BsFillExclamationOctagonFill></BsFillExclamationOctagonFill>
        </div>
        <div>
          <FaArrowLeft></FaArrowLeft>
          <BsFillExclamationOctagonFill></BsFillExclamationOctagonFill>
          <BsFillExclamationOctagonFill></BsFillExclamationOctagonFill>
          <BsFillExclamationOctagonFill></BsFillExclamationOctagonFill>
        </div>
      </div>

      <div className="details-row-1">
        <h2 className="details-title">{mail ? mail.title : ""}</h2>

        <div className="details-row-1-right">
          <LuPrinter></LuPrinter>
          <FaExternalLinkAlt></FaExternalLinkAlt>
        </div>
      </div>
      <div className="details-row-2">
        <div className="details-row-2-left">
          <Avatar text="A" color="red"></Avatar>
          <div className="details-user-data">
            <p>Google Play googleplay-noreply@google.com</p>
            <p>Za jaz</p>
          </div>
        </div>

        <div className="details-row-2-right">
          <p>4. sep. 2024, 13:44 (pred 13 dnevi)</p>
          <FaRegStar></FaRegStar>
          <FaRegStar></FaRegStar>
          <FaRegStar></FaRegStar>
          <FaRegStar></FaRegStar>
        </div>
      </div>

      <div className="details-row-3">
        <div className="details-content">
          <p>{mail ? mail.content : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
