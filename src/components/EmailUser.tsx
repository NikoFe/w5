import React from "react";
import Avatar from "./Avatar";

interface Props {
  username: string;
  contact: string;
  text: string;
  color: string;
}

const EmailUser = ({ username, contact, text, color }: Props) => {
  return (
    <div className="email-user">
      <Avatar text={text} color={color}></Avatar>

      <div className="email-user-right">
        <p>{username}</p>
        <p>{contact}</p>
      </div>
    </div>
  );
};

export default EmailUser;
