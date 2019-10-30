import React, { Component } from "react";
import emptyStar from "../images/star-empty.png";
import fullStar from "../images/star-full.png";
{
  /*Deprecated Modele , do not use this */
}
class Rating extends Component {
  render() {
    return (
      <div>
        <img src={emptyStar} className="icon" alt="" />
        <img src={fullStar} className="icon" alt="" />
      </div>
    );
  }
}

export default Rating;
