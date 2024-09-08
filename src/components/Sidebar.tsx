import React from "react";
import SideOption from "./SideOption";
import { FaRegQuestionCircle, FaPlus } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <button className="createButton">
          <FaPencil className="i"></FaPencil>
          <p>Novo</p>
        </button>
      </div>

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
