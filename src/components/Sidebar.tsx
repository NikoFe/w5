import React from "react";
import SideOption from "./SideOption";
import { FaRegQuestionCircle, FaPlus } from "react-icons/fa";
import CreateButton from "./CreateButton";

import { Link } from "react-router-dom";

const Sidebar = () => {
  function enableCreation() {
    const createButton = document.querySelectorAll(
      ".new-mail"
    )[0] as HTMLElement;
    createButton.style.display = "flex";
  }

  return (
    <div className="sidebar">
      <CreateButton onClick={enableCreation}></CreateButton>

      <div className="side-options">
        <Link to="/prejeto-glavno">
          <SideOption text="Prejeto" extra="10" bold={false}>
            <FaRegQuestionCircle></FaRegQuestionCircle>
          </SideOption>
        </Link>

        <SideOption text="Z zvezdico" extra="10" bold={false}>
          <FaRegQuestionCircle></FaRegQuestionCircle>
        </SideOption>
        <SideOption text="Preloženo" extra="10" bold={false}>
          <FaRegQuestionCircle></FaRegQuestionCircle>
        </SideOption>
        <SideOption text="Pomembno" extra="10" bold={false}>
          <FaRegQuestionCircle></FaRegQuestionCircle>
        </SideOption>

        <Link to="/poslano">
          <SideOption text="Poslano" extra="10" bold={false}>
            <FaRegQuestionCircle></FaRegQuestionCircle>
          </SideOption>
        </Link>

        <Link to="/osnutki">
          <SideOption text="Osnutki" extra="10" bold={false}>
            <FaRegQuestionCircle></FaRegQuestionCircle>
          </SideOption>
        </Link>

        <SideOption text="Kategorije" extra="10" bold={false}>
          <FaRegQuestionCircle></FaRegQuestionCircle>
        </SideOption>
        <SideOption text="Več" extra="10" bold={false}>
          <FaRegQuestionCircle></FaRegQuestionCircle>
        </SideOption>
      </div>

      <div className="marks">
        <h4>Oznake</h4>
        <FaPlus className="i"></FaPlus>
      </div>
    </div>
  );
};

export default Sidebar;
