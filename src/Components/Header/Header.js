import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "5vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="https://secureservercdn.net/160.153.137.40/t0d.a79.myftpupload.com/wp-content/uploads/2021/07/auditech-logo.svg?time=1640281622"
        alt="logo"
      />
      <h1>Github Monitoring</h1>
    </div>
  );
};

export default Header;
