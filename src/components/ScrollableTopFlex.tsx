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
  data: Message[];
}

const ScrollableTopFlex = ({ data }: Props) => {
  //function changeMails(mailType: string) {}

  return (
    <div className="scrollable-tops">
      <ScrollableTop
        text="Glavno"
        onSelect={() => {
          console.log("CHANGING DATA");
          data = osnutki;
          // mailType = "osnutki";
          //location.href = "/osnutki";
        }}
      >
        <FaRegFileLines></FaRegFileLines>
      </ScrollableTop>

      <ScrollableTop
        text="Promocije"
        onSelect={() => {
          location.href = "/osnutki";
        }}
      >
        <IoPricetagSharp></IoPricetagSharp>
      </ScrollableTop>
      <ScrollableTop
        text="Druzabno"
        onSelect={() => {
          location.href = "/osnutki";
        }}
      >
        <IoPeople></IoPeople>
      </ScrollableTop>
      <ScrollableTop
        text="Posodobitve"
        onSelect={() => {
          location.href = "/osnutki";
        }}
      >
        <FaCircleInfo></FaCircleInfo>
      </ScrollableTop>
    </div>
  );
};

export default ScrollableTopFlex;
