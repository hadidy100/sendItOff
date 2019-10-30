import React, { Component } from "react";
import spiderLogo from "../images/landingPageSpider.gif";
import curvedRoad from "../images/curvedRoad.jpeg";

class LandingPage extends Component {
  handleMail = () => {
    console.log("Mail  map Image clicked");
  };
  handleTrend = () => {
    console.log("Trend map Image clicked");
  };

  handleMoneyReport = () => {
    console.log("Money Report map Image clicked ");
  };
  handleEnvelop = () => {
    console.log("Envelop map Image clicked ");
  };

  handleManilaFolder = () => {
    console.log("handleManilaFolder Report clicked ");
  };

  handleShare = () => {
    console.log("Share map Image clicked! ");
  };

  handleThinking = () => {
    console.log("Thinking map Image clicked! ");
  };

  handlexyTrend = () => {
    console.log("xyTrend map Image clicked ");
  };

  handleColumnerReport = () => {
    console.log("columner report map image clicked");
  };

  handleMultiPageReport = () => {
    console.log("Multio page report map image clicked");
  };

  handleAirPlane = () => {
    console.log("Airplane map image clicked");
  };

  handleSinglePageReport = () => {
    console.log("Single Page report map image clicked");
  };

  handleKey = () => {
    console.log("Key map image clicked");
  };

  render() {
    return (
      <div>
        <img
          src={curvedRoad}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />

        <img
          useMap="#image-map"
          src={spiderLogo}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />

        <map name="image-map">
          <area
            className="MailMap"
            coords="83,34,166,3,102,3,88,12,80,21,84,44,90,51,99,59,107,62,116,64,126,64,140,64,154,64,176,62,191,62,208,62,224,63,235,63,251,63,266,64,278,64,288,64,301,65,315,65,326,63,338,59,343,53,346,45,345,35,343,21,340,12,325,2,279,0,224,-1,186,0,174,0,143,2,134,0,124,0"
            shape="poly"
            alt="Nothing "
            title="mail"
            onClick={() => this.handleMail()}
            style={{ cursor: "pointer" }}
          />

          {/* Second tab  */}

          <area
            coords="27,108,38,91,54,85,80,84,99,85,128,84,155,86,172,85,199,85,217,85,242,88,260,85,276,89,291,103,275,138,294,124,295,112,285,137,217,146,100,144,44,143,30,127,25,118"
            shape="poly"
            title="Trend"
            alt=""
            onClick={() => this.handleTrend()}
            style={{ cursor: "pointer" }}
          />

          {/* Third Tab Money Report */}
          <area
            coords="1,203,7,177,31,162,16,169,3,185,21,220,11,213,64,162,115,163,166,163,215,169,247,161,272,190,264,210,249,223,181,227,93,225,34,228,40,163,13,177,40,167,46,174,24,206,51,163,27,172,25,199,7,198,19,188,8,187"
            shape="poly"
            alt=""
            onMouseMove={this.mouseEnterHandler}
            onClick={() => this.handleMoneyReport()}
            style={{ cursor: "pointer" }}
          />
          {/* Fourth Tab  */}
          <area
            alt=""
            title="MultiPageReport"
            coords="6,258,23,243,71,242,138,245,192,244,244,243,270,269,262,294,247,305,181,308,130,307,79,304,26,303,4,286,0,272"
            shape="poly"
            onClick={this.handleMultiPageReport}
            style={{ cursor: "pointer" }}
          />
          {/* Fifth Tab  */}
          <area
            alt=""
            title="SinglePageReport"
            coords="28,362,48,322,30,338,23,350,34,374,47,385,74,322,57,322,70,387,57,390,40,351,50,338,44,329,95,325,124,322,155,322,175,326,212,326,229,326,255,327,275,324,292,344,292,360,288,372,273,386,223,388,170,388,138,388,106,391,82,385,43,378,32,344,49,332,64,332,64,342,42,358,43,372"
            shape="poly"
            onClick={this.handleSinglePageReport}
            style={{ cursor: "pointer" }}
          />

          {/* Sixth Tab  */}
          <area
            alt=""
            title="ColumnerReport"
            coords="80,431,92,410,104,403,131,403,158,403,195,404,238,405,273,404,306,404,324,405,343,417,349,432,347,450,333,465,310,467,281,466,240,466,195,467,154,466,120,466,97,464,84,449"
            shape="poly"
            onClick={this.handleColumnerReport}
            style={{ cursor: "pointer" }}
          />

          {/* Saventh Tab  */}
          <area
            alt=""
            title="share"
            coords="678,32,694,6,681,15,719,3,743,2,769,1,811,0,854,2,904,3,926,4,944,20,945,35,939,54,925,65,842,64,776,65,738,66,695,59,680,44"
            shape="poly"
            onClick={this.handleShare}
            style={{ cursor: "pointer" }}
          />

          {/* Eighth Tab  */}
          <area
            alt=""
            title="thinking"
            coords="735,110,755,83,741,90,736,97,779,79,800,81,825,82,844,82,883,83,909,83,931,83,944,83,975,85,992,90,1002,105,1002,119,996,132,978,146,944,145,905,143,866,143,836,146,799,143,775,143,754,142,740,130"
            shape="poly"
            onClick={this.handleThinking}
            style={{ cursor: "pointer" }}
          />

          {/* Ninth Tab  */}
          <area
            alt=""
            title="xyTrend"
            coords="755,193,767,178,781,166,805,165,855,164,878,164,924,163,970,162,1004,162,1023,182,1026,202,1011,222,969,228,915,228,845,226,782,227,765,212,761,200"
            shape="poly"
            onClick={this.handlexyTrend}
            style={{ cursor: "pointer" }}
          />

          {/* Tenth Tab  */}
          <area
            alt=""
            title="Envelop"
            coords="758,273,765,250,784,245,800,244,833,243,855,243,872,243,897,244,936,243,972,244,1002,244,1018,252,1025,271,1023,288,1005,306,961,306,936,307,876,304,821,305,782,303,763,294,755,280"
            shape="poly"
            onClick={this.handleEnvelop}
            style={{ cursor: "pointer" }}
          />
          {/* Elaventh Tab  */}
          <area
            alt=""
            title="ManilaFolder"
            coords="732,348,760,320,743,329,785,325,820,323,860,323,899,328,942,327,977,321,1002,348,1001,363,988,383,940,388,888,388,830,388,775,382,748,381,735,364"
            shape="poly"
            onClick={this.handleManilaFolder}
            style={{ cursor: "pointer" }}
          />

          {/* Twelveth Tab  */}
          <area
            alt=""
            title="Airplane"
            coords="681,434,690,412,712,406,749,405,778,405,807,405,875,407,923,402,943,418,949,441,938,460,928,463,865,469,795,468,740,470,703,466,686,455,680,443,681,422"
            shape="poly"
            onClick={this.handleAirPlane}
            style={{ cursor: "pointer" }}
          />

          <area
            alt=""
            title="Key"
            coords="481,425,491,408,487,448,501,456,520,462,536,456,546,432,543,418,538,404,513,402,495,404"
            shape="poly"
            onClick={this.handleKey}
            style={{ cursor: "pointer" }}
          />
        </map>
      </div>
    );
  }
}

export default LandingPage;
