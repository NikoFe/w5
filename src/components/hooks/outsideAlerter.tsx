import React, { useEffect, useRef, useState } from "react";

export const outsideAlerter = (initialValue: boolean) => {
  const ref = useRef<HTMLDivElement>(null); //referene to an element inside

  const [visible, setVisible] = useState<boolean>(initialValue);

  const handleOutsideClick = (event: any) => {
    if (ref.current && ref.current.contains(event.target)) setVisible(false); //check if the thing we clicked is outside  our reference
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.addEventListener("click", handleOutsideClick, true);
    }; //cleanu function
  }, [ref]); //last line to run all this when the ref element changes

  return { visible, setVisible, ref };
};
