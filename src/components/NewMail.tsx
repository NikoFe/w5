import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";

const NewMail = () => {
  const navigate = useNavigate();

  const [reciever, setReciever] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = async (e: any) => {
    e.preventDefault();

    const newMail = {
      id: String(Math.random() * 9999),
      sender: "Me",
      date: String(new Date())
        .substring(0, 16)
        .replace(/(\r\n|\n|\r)/gm, ""),
      content: content,
      type: "poslano",
      title: title,
    };
    //reciever: reciever,
    console.log("MAIL TITLE: " + newMail.title);

    const res = await fetch("http://localhost:8000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMail),
    });
    // return;
    navigate("/");
  };

  function hideSelf() {
    //document.querySelectorAll(".new-mail")[0]
    let currentNewMail = document.querySelectorAll(
      ".new-mail"
    )[0] as HTMLElement;

    currentNewMail.style.display = "none";
  }

  return (
    <form onSubmit={submit}>
      <div className="new-mail">
        <RxCross2 className="new-mail-cross" onClick={hideSelf}></RxCross2>

        <div className="new-mail-top">
          <p>Novo sporočilo</p>
        </div>
        <input
          required
          name="reciever"
          type="text"
          className="new-mail-input"
          placeholder="Prejemniki"
          value={reciever}
          onChange={(e) => setReciever(e.target.value)}
        />
        <input
          required
          name="title"
          type="text"
          className="new-mail-input"
          placeholder="Zadeva"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          required
          name="content"
          className="new-mail-textarea"
          rows={21}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="new-mail-bottom">
          <FaCaretDown className="caretDown"></FaCaretDown>
          <input type="submit" />

          {/*} <BlueButton onClick={submit}></BlueButton>*/}
        </div>
      </div>
    </form>
  );
};

export default NewMail;
