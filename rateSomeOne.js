import React, { Component } from "react";
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
              <label htmlFor="SSN">Socail Security / Fed TaxID</label>
              <input
                type="SSN"
                className="form-control"
                id="SSN"
                placeholder="123-45-6789 "
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
              <label htmlFor="email">Email Address </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="StevenSmith@gmail.com "
              />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="password1">password </label>
              <input
                type="password"
                className="form-control"
                id="password1"
                placeholder="XXXXXXXX "
              />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="password2">password </label>
              <input
                type="password"
                className="form-control"
                id="password2"
                placeholder="XXXXXXXX "
              />
            </div>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                Physical Address
              </li>
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
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                Mailing Address
              </li>
            </ol>
          </nav>
          <div className="form-group">
            <label htmlFor="inputDestinationAddress">Street Address</label>
            <input
              type="text"
              className="form-control"
              id="inputDestinationAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2d">Address 2</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2d"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCityd">City</label>
              <input type="text" className="form-control" id="inputCityd" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputStated">State</label>
              <select className="form-control">
                <option>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZipd">Zip</label>
              <input type="text" className="form-control" id="inputZipd" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comments</label>
            <textarea
              className="form-control"
              rows="5"
              id="comments"
              placeholder="Please enter your comments or special instructions here..."
            ></textarea>
          </div>{" "}
          <button
            type="submit"
            className="btn btn-success"
            onClick={this.handlePostIt}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
export default RateSomeOne;
