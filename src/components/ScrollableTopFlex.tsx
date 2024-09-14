import React from "react";
import { useState } from "react";
import ScrollableTop from "./ScrollableTop";
import { FaRegFileLines } from "react-icons/fa6";
import { IoPricetagSharp, IoPeople } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import prejetoGlavno from "../jsons/prejeto-glavno.json";
import prejetoDruzabno from "../jsons/prejeto-druzabno.json";
import prejetoPromocije from "../jsons/prejeto-promocije.json";
import prejetoPosodobitve from "../jsons/prejeto-posodobitve.json";
import osnutki from "../jsons/osnutki.json";
import poslano from "../jsons/poslano.json";
import Mail from "./Mail";

interface Message {
  id: string;
  sender: string;
  date: string;
  content: string;
  important: boolean;
  unsent: boolean;
}

interface Props {
  onClickGlavno: () => void;
  onClickPromocije: () => void;
  onClickDruzabno: () => void;
  onClickPosodobitve: () => void;
}

const ScrollableTopFlex = ({
  onClickGlavno,
  onClickPromocije,
  onClickDruzabno,
  onClickPosodobitve,
}: Props) => {
  const [selectedTop, setSelectedTop] = useState(0);

  function changeSelectedIndex(num: number) {
    setSelectedTop(num);
  }

  return (
    <>
      <div className="scrollable-tops">
        <ScrollableTop
          text="Glavno"
          onSelect={() => {
            onClickGlavno();
          }}
          changeSelected={() => {
            console.log("CHANGING INDEX");
            changeSelectedIndex(0);
          }}
          selected={selectedTop == 0 ? false : true}
        >
          <FaRegFileLines></FaRegFileLines>
        </ScrollableTop>

        <ScrollableTop
          text="Promocije"
          onSelect={() => {
            //  location.href = "/osnutki";
            onClickPromocije();
          }}
          changeSelected={() => {
            console.log("CHANGING INDEX");
            changeSelectedIndex(1);
          }}
          selected={selectedTop == 1 ? false : true}
        >
          <IoPricetagSharp></IoPricetagSharp>
        </ScrollableTop>
        <ScrollableTop
          text="Druzabno"
          onSelect={() => {
            onClickDruzabno();
            //location.href = "/osnutki";
          }}
          changeSelected={() => {
            console.log("CHANGING INDEX");
            changeSelectedIndex(2);
          }}
          selected={selectedTop == 2 ? false : true}
        >
          <IoPeople></IoPeople>
        </ScrollableTop>
        <ScrollableTop
          text="Posodobitve"
          onSelect={() => {
            onClickPosodobitve();
            //  location.href = "/osnutki";
          }}
          changeSelected={() => {
            console.log("CHANGING INDEX");
            changeSelectedIndex(3);
          }}
          selected={selectedTop == 3 ? false : true}
        >
          <FaCircleInfo></FaCircleInfo>
        </ScrollableTop>
      </div>
    </>
  );
};

export default ScrollableTopFlex;
