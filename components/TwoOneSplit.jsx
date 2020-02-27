import React from "react";

export function TwoOneSplit({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        alignItems: "center",
        justifyContent: "stretch"
      }}
    >
      {children}
    </div>
  );
}
