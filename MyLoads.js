import React, { Component } from "react";
import { getLoads } from "../services/fakeLoadService";
import { getUser } from "../services/users";

class MyLoads extends Component {
  state = { loads: getLoads(), users: getUser(1) };
  handleDelete = load => {
    const updatedLoads = this.state.loads.filter(l => l._id !== load._id);
    this.setState({ loads: updatedLoads });
  };
  render() {
    if (this.state.loads.length === 0)
      return (
        <p>
          {" "}
          Hi {this.state.users.firstName}, you have no loads posted on the board
        </p>
      );
    return (
      <div>
        <h4>
          Hi {this.state.users.firstName}, you have {this.state.loads.length}{" "}
          posted loads on the board
        </h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Shipper</th>
              <th> City </th>
              <th>State </th>
              <th>Load Classification</th>
              <th>Available Load Count </th>
              <th>Price</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.loads.map(load => (
              <tr key={load._id}>
                <td>{load.Shipper}</td>
                <td>{load.city} </td>
                <td>{load.state}</td>
                <td>{load.Classification.name}</td>
                <td>{load.loadCount}</td>
                <td>{load.price}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(load)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyLoads;
