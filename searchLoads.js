import React, { Component } from "react";
class SearchLoads extends Component {
  handleSearch = () => {
    console.log("Searching for load for you");
  };
  render() {
    return (
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="loadType">Load Type</label>
            <select className="form-control">
              <option>Choose...</option>
              <option>...</option>
            </select>
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
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Destination
            </li>
          </ol>
        </nav>
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
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={this.handleSearch}
        >
          Search
        </button>
      </form>
    );
  }
}

export default SearchLoads;
