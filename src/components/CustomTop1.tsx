import React, { useEffect, useRef } from "react";
import Button1 from "./Button1";
import { IoCheckmark, IoFlower } from "react-icons/io5";
import EmailUser from "./EmailUser";
import { useState } from "react";
import { outsideAlerter } from "./hooks/outsideAlerter";

interface Props {
  od: boolean;
  kadarkoli: boolean;
  vsebujePrilogo: boolean;
  Za: boolean;
  jeNeprebrano: boolean;
}

const CustomTop1 = ({
  od,
  kadarkoli,
  vsebujePrilogo,
  Za,
  jeNeprebrano,
}: Props) => {
  const [index, setIndex] = useState(-1);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let handler = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        console.log("MENUREF: " + menuRef.current);
        setIndex(-1);
      }
    };

    document.addEventListener("mousedown", handler);
  });

  function clickedOutside() {
    if (index != -1) {
      setIndex(-1);
    }
  }

  return (
    <div className="custom-top-1" onClick={clickedOutside} ref={menuRef}>
      {od && (
        <Button1
          text="Od"
          dropdown={index == 0}
          onClick={() => setIndex(0)}
          paramater="od"
          arrow={true}
        >
          <p>KadarKoli</p>
        </Button1>
      )}

      {kadarkoli && (
        <Button1
          text="Kadar Koli"
          dropdown={index == 1}
          onClick={() => setIndex(1)}
          paramater="kadarkoli"
          arrow={true}
        >
          <p id="checkedP">
            <IoCheckmark className="i"></IoCheckmark>KadarKoli
          </p>
          <p>Starejše od enega tedna</p>
          <p>Starejše od enega meseca</p>
          <p>Starejše od 6 mesecev</p>
          <p>Starejše od enega leta</p>
          <hr />
          <p>Obdobje po meri...</p>
        </Button1>
      )}

      {vsebujePrilogo && (
        <Button1
          text="Vsebuje Prilogo"
          dropdown={false}
          onClick={() => setIndex(-1)}
          paramater=""
          arrow={false}
        >
          <a></a>
        </Button1>
      )}

      {Za && (
        <Button1
          text="Za"
          dropdown={index == 2}
          onClick={() => setIndex(2)}
          paramater="za"
          arrow={true}
        >
          <div className="dropdown-users">
            <input type="text" placeholder="Ime ali e-poštni naslov"></input>
            <EmailUser
              contact="Niko Ferk"
              username="niko.ferk@gmail.com"
              color="cadetblue"
              text="N"
            ></EmailUser>

            <EmailUser
              contact="narocanje.dph@zd-mb.si"
              username="ZDMB psihiogena Naroc..."
              color="chocolate"
              text="Z"
            ></EmailUser>

            <EmailUser
              contact="Niko Ferk"
              username="niko.ferk@gmail.com"
              color="cadetblue"
              text="N"
            ></EmailUser>

            <EmailUser
              contact="Niko Ferk"
              username="niko.ferk@gmail.com"
              color="cadetblue"
              text="N"
            ></EmailUser>

            <EmailUser
              contact="Niko Ferk"
              username="niko.ferk@gmail.com"
              color="cadetblue"
              text="N"
            ></EmailUser>
            <EmailUser
              contact="Niko Ferk"
              username="niko.ferk@gmail.com"
              color="cadetblue"
              text="N"
            ></EmailUser>
            <EmailUser
              contact="Niko Ferk"
              username="niko.ferk@gmail.com"
              color="cadetblue"
              text="N"
            ></EmailUser>
            <EmailUser
              contact="Niko Ferk"
              username="niko.ferk@gmail.com"
              color="cadetblue"
              text="N"
            ></EmailUser>
            <EmailUser
              contact="Niko Ferk"
              username="niko.ferk@gmail.com"
              color="cadetblue"
              text="N"
            ></EmailUser>
          </div>
        </Button1>
      )}

      {jeNeprebrano && (
        <Button1
          text="Je Neprebrano"
          dropdown={false}
          onClick={() => setIndex(-1)}
          paramater=""
          arrow={false}
        >
          <a></a>
        </Button1>
      )}

      <p className="blueP">Napredno iskanje</p>
    </div>
  );
};

export default CustomTop1;
