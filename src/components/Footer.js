import React from "react";

export default function Footer() {
  return (
    <div
      class="navbar navbar-expand-lg navbar-light"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        background: "linear-gradient(45deg, #34a1eb 30%, #0d2b40 90%)",
        fontSize: "20px",
      }}
    >
      &copy; Copyright 2021 all rights reserved by -{" "}
      <span style={{ color: "yellow" }}> - Mohanraj Venkatachalam</span>
    </div>
  );
}
