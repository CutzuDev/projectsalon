import React from "react";
import { Link } from "react-router-dom";

function NFHandle() {
  return (
    <div className="nfh__page">
      <div className="nfh__container">
        <span className="nfh__title">404</span>
        <span className="nfh__para">Page Not Found</span>
        <Link to={"/"}>
          <button className="nfh__button">Go Back</button>
        </Link>
      </div>
    </div>
  );
}

export default NFHandle;
