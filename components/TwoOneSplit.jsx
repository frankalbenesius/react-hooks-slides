import React from "react";

export function TwoOneSplit ({children}) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                // justifyItems: "center",
                alignItems: "center",
                justifyContent: "stretch"
            }}
        >
            {children}
        </div>
    )
}
