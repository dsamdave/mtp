import React from "react";
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div
      className="position-relative"
      style={{ minHeight: "calc(100vh - 70px)" }}
    >
      <h2
        className="position-absolute text-secondary"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        404 | NotFound
      </h2>

      <Link to="/" className="text-decoration-none">
        <p          className="position-absolute text-secondary"
        style={{ top: "60%", left: "50%", transform: "translate(-50%, -50%)" }}

        >
          Go Back Home
          </p>
      </Link>


    </div>
  );
};

export default NotFound;
