import React from "react";

export class RoomAvailable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAvailable: props.room.isAvailable
    };
  }
  render() {
    return (
      <div style={{ padding: "1rem" }}>
        <div>{this.state.isAvailable ? "Room Open" : "Room Unavailable"}</div>
        <button onClick={() => this.setState({ isAvailable: false })}>
          Book
        </button>
      </div>
    );
  }
}
