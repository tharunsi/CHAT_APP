import React from "react";
import "./MessageSkeleton.css";

const MessageSkeleton = () => {
  return (
    <>
      <div className="row">
        <div className="circle skeleton"></div>
        <div className="col">
          <div className="bar skeleton"></div>
          <div className="bar skeleton"></div>
        </div>
      </div>

      <div className="row right">
        <div className="col">
          <div className="bar skeleton"></div>
        </div>
        <div className="circle skeleton"></div>
      </div>
    </>
  );
};

export default MessageSkeleton;
