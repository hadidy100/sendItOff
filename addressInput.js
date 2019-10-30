import React, { Component } from "react";
class AddressInput extends Component {
  render() {
    return (
      <div class="input-group input-group-lg">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-lg">
            Large
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
    );
  }
}

export default AddressInput;
