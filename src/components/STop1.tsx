import React from "react";
import ScrollableTop from "./ScrollableTop";
import { FaImage } from "react-icons/fa";
import { IoIosPricetag, IoIosInformationCircleOutline } from "react-icons/io";
import { IoPeople } from "react-icons/io5";

const STop1 = () => {
  return (
    <div className="scrollable-tops">
      <ScrollableTop text="Glavno">
        <FaImage className="i"></FaImage>
      </ScrollableTop>
      <ScrollableTop text="Promocije">
        <IoIosPricetag className="i"></IoIosPricetag>
      </ScrollableTop>
      <ScrollableTop text="Družabno">
        <IoPeople className="i"></IoPeople>
      </ScrollableTop>
      <ScrollableTop text="Posodobitve">
        <IoIosInformationCircleOutline className="i"></IoIosInformationCircleOutline>
      </ScrollableTop>
    </div>
  );
};

export default STop1;
