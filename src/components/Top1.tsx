import React from "react";

import CircleDiv from "./CircleDiv";

import {
  FaRegSquare,
  FaChevronLeft,
  FaChevronRight,
  FaCaretDown,
} from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdKeyboard } from "react-icons/md";

const Top1 = () => {
  return (
    <div className="top-1">
      <div className="top-1-left">
        <div className="top-1-left-dropdown">
          <FaRegSquare></FaRegSquare>

          <IoMdArrowDropdown></IoMdArrowDropdown>
        </div>
        <CircleDiv>
          <IoIosRefresh className="i"></IoIosRefresh>
        </CircleDiv>
        <CircleDiv>
          <BsThreeDotsVertical className="i"></BsThreeDotsVertical>
        </CircleDiv>
      </div>

      <div className="top-1-right">
        <p className="gray-p">1-50 od 1.855</p>
        <CircleDiv>
          <FaChevronLeft className="i"></FaChevronLeft>
        </CircleDiv>
        <CircleDiv>
          <FaChevronRight className="i"></FaChevronRight>
        </CircleDiv>

        <div className="top-1-right-dropdown">
          <MdKeyboard></MdKeyboard>
          <FaCaretDown></FaCaretDown>
        </div>
      </div>
    </div>
  );
};

export default Top1;
