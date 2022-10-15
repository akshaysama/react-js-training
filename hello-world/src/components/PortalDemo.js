import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <p>PortalDemo</p>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
