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
        <div>
          <div>{this.state.isAvailable ? "OPEN" : "Not Available"}</div>
          <button
            onClick={() => this.setState({ isAvailable: false })}>
            Book
          </button>
        </div>
      );
    }
}