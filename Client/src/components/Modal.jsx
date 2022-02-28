import React from "react";
import ReactDom from "react-dom";
import { useNavigate } from "react-router-dom";

export default function Modal({ title, content, Action, onDismiss }) {
  const navigate = useNavigate();
  return ReactDom.createPortal(
    <div
      onClick={() => {
        navigate(onDismiss);
      }}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="ui standard modal visible active"
      >
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">
          <Action />
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
