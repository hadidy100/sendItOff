import React, { Component } from "react";
class PostLoads extends Component {
  handlePostIt = () => {
    console.log("Post it button clicked.");
  };
  render() {
    return (
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Load Type</label>
            <select className="form-control">
              <option>Choose from the drop down...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPrice">$ Price </label>
            <input
              type="price"
              className="form-control"
              id="inputPrice"
              placeholder="Price"
            />
          </div>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Origination
            </li>
          </ol>
        </nav>
        <div className="form-group">
          <label htmlFor="inputOriginationAddress">Origination Address</label>
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
              Destination
            </li>
          </ol>
        </nav>
        <div className="form-group">
          <label htmlFor="inputDestinationAddress">Destination Address</label>
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
        {/* I might need this, so I am saving it for later if need be
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
       */}
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
          Post It
        </button>
      </form>
    );
  }
}

export default PostLoads;
