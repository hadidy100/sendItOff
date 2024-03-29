import React, { Component } from "react";
import RatingSlider from "./ratingSlider";

class RateSomeOne extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputFirstName">First Name </label>
              <input
                type="firstName"
                className="form-control"
                id="inputFirstName"
                placeholder="Steven"
              />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="inputLastName">Last Name </label>
              <input
                type="lastName"
                className="form-control"
                id="inputLastName"
                placeholder="Smith"
              />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="inputCompanyName">Company's Name</label>
              <input
                type="text"
                className="form-control"
                id="inputCompanyName"
                placeholder="ABC Company"
              />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="PhoneNumber1">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="PhoneNumber1"
                placeholder="714-555-9999 "
              />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="PhoneNumber2">Alternate Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="PhoneNumber2"
                placeholder="714-555-0000 "
              />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="AccountNumber">Account Number</label>
              <input
                type="text"
                className="form-control"
                id="AccountNumber"
                placeholder="Acct# "
              />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="email">Email Address </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="StevenSmith@gmail.com "
              />
            </div>
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Search
            </button>
            <span>
              <br />
              <br />
              <br />
            </span>
          </div>

          <nav aria-label="breadcrumb">
            <ol
              className="breadcrumb"
              style={{ backgroundColor: "white", flex: 1, padding: "60" }}
            >
              <li className="breadcrumb-item active" aria-current="page"></li>
            </ol>
          </nav>
          <div className="form-group">
            <label htmlFor="inputOriginationAddress">Street Address</label>
            <input
              type="text"
              className="form-control"
              id="inputOriginationAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Address 2</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select className="form-control">
                <option>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>

          <nav aria-label="breadcrumb danger ">
            <ol className="breadcrumb">
              <li className="list-group-item list-group-item-danger">
                Slide below to submit your rating
              </li>
            </ol>
          </nav>
          <RatingSlider />
        </form>
      </div>
    );
  }
}
export default RateSomeOne;
