import React, { useEffect, useState } from "react";
import Mail from "./Mail";
import ProgressBar from "./ProgressBar";
import { FaExternalLinkAlt } from "react-icons/fa";
import ScrollableTop from "./ScrollableTop";

import STop1 from "./STop1";
import Top1 from "./Top1";

import prejetoGlavno from "../jsons/prejeto-glavno.json";
import prejetoDruzabno from "../jsons/prejeto-druzabno.json";
import prejetoPromocije from "../jsons/prejeto-promocije.json";
import prejetoPosodobitve from "../jsons/prejeto-posodobitve.json";
import osnutki from "../jsons/osnutki.json";
import poslano from "../jsons/poslano.json";
import ScrollableTopFlex from "./ScrollableTopFlex";
import CustomTop1 from "./CustomTop1";

function selectTop(str: string) {
  switch (str) {
    case "poslano":
      {
        return (
          <CustomTop1
            od={false}
            kadarkoli={true}
            vsebujePrilogo={true}
            Za={true}
            jeNeprebrano={true}
          ></CustomTop1>
        );
      }

      break;
    case "pomembno": {
      return (
        <CustomTop1
          od={true}
          kadarkoli={true}
          vsebujePrilogo={true}
          Za={true}
          jeNeprebrano={true}
        ></CustomTop1>
      );
    }
    case "osnutki":
      {
        return (
          <CustomTop1
            od={false}
            kadarkoli={true}
            vsebujePrilogo={true}
            Za={true}
            jeNeprebrano={false}
          ></CustomTop1>
        );
      }

      break;
    default:
      return;
  }
}

interface Props {
  pageType: string;
  top: string;
}

const jsonArray = [];

const Scrollable = ({ pageType, top }: Props) => {
  const [data, setData] = useState(prejetoGlavno);

  function selectType(str: string) {
    let selected = data;

    switch (str) {
      case "osnutki":
        selected = osnutki;

        break;

      case "poslano":
        selected = poslano;
        break;

      case "prejeto-glavno":
        selected = prejetoGlavno;
        break;
    }

    // let selected = prejetoGlavno;

    const mailsArray = selected.map((mail) => (
      <Mail sender={mail.sender} date={mail.date} clip={false} key={mail.id}>
        <p key={mail.id}>{mail.content}</p>
      </Mail>
    ));

    const surrounded = <div className="mails-array">{mailsArray}</div>;
    return surrounded;
  }

  function changeData(str: string) {
    switch (str) {
      case "prejeto-glavno":
        {
          setData(prejetoGlavno);
        }
        break;
      case "prejeto-promocije":
        {
          setData(prejetoPromocije);
        }
        break;
      case "prejeto-druzabno":
        {
          setData(prejetoDruzabno);
        }
        break;
      case "prejeto-posodobitve":
        {
          setData(prejetoPosodobitve);
        }
        break;
        deafult: setData(prejetoPosodobitve);
    }
  }

  useEffect(() => {
    setData(prejetoGlavno);
  }, []);

  return (
    <>
      <div className="scrollable">
        {selectTop(top)}
        <Top1></Top1>
        <ScrollableTopFlex
          onClickGlavno={() => changeData("prejeto-glavno")}
          onClickPromocije={() => changeData("prejeto-promocije")}
          onClickDruzabno={() => changeData("prejeto-druzabno")}
          onClickPosodobitve={() => changeData("prejeto-posodobitve")}
        ></ScrollableTopFlex>
        {selectType(pageType)}
        <div
          className="scrollable-bottom"
          onClick={() => {
            console.log("DATA; " + data[0].sender);
          }}
        >
          <div className="scrollable-bottom-left">
            <ProgressBar progress={20}></ProgressBar>
            <p>
              Uporabljeno 0,99 GB od 15 GB{" "}
              <FaExternalLinkAlt></FaExternalLinkAlt>
            </p>
          </div>

          <p>Pogoji · Zasebnost · Pravilniki o programu</p>

          <div className="scrollable-bottom-right">
            <p>
              Zadnja dejavnost v računu: pred 0 minutami Odprt na enem drugem
              mestu
            </p>
            <div>
              <p>Podrobnosti</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scrollable;
