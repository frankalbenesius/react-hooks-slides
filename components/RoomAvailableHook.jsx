import React, {useState} from "react";

export function RoomAvailableHook ({room}) {
  const [isAvailable, setIsAvailable] = useState(room.isAvailable);

  return (
    <div>
      <div>{isAvailable ? "OPEN" : "Not Available"}</div>
        <button onClick={() => setIsAvailable(false)}>
          Book
        </button>
    </div>
  );
}