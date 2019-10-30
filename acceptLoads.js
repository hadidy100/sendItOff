import React, { Component } from "react";
class AcceptLoads extends Component {
  render() {
    return (
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="loadType">Load Type</label>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  someLoadType
                </li>
              </ol>
            </nav>
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputPrice">$ Price </label>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  some Price
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li
              className="list-group-item list-group-item-success"
              aria-current="page"
            >
              Origination
            </li>
          </ol>
        </nav>
        <div className="form-group">
          <label htmlFor="inputOriginationAddress">Origination Address</label>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                Some Address
              </li>
            </ol>
          </nav>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                Some Address 2
              </li>
            </ol>
          </nav>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  some city
                </li>
              </ol>
            </nav>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  some state
                </li>
              </ol>
            </nav>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  some zipcode
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="list-group-item list-group-item-warning">
              Destination
            </li>
          </ol>
        </nav>
        <div className="form-group">
          <label htmlFor="inputDestinationAddress">Destination Address</label>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                some destination address
              </li>
            </ol>
          </nav>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2d">Address 2</label>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                some destination Address 2
              </li>
            </ol>
          </nav>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCityd">City</label>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  some city
                </li>
              </ol>
            </nav>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputStated">State</label>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  some state
                </li>
              </ol>
            </nav>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZipd">Zip</label>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  some zip code
                </li>
              </ol>
            </nav>{" "}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments</label>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <p className="breadcrumb-item active" aria-current="page">
                comments and special instruction go here <br />
                comments and special instruction go here <br />
                comments and special instruction go here <br />
                comments and special instruction go here <br />
                comments and special instruction go here <br />
                comments and special instruction go here <br />
                comments and special instruction go here <br />
              </p>
            </ol>
          </nav>
        </div>{" "}
        <button
          type="submit"
          className="btn btn-success"
          onClick={this.handlePostIt}
        >
          Accept Load
        </button>
      </form>
    );
  }
}

export default AcceptLoads;
