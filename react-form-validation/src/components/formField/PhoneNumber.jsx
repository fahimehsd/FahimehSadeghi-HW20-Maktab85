import React from "react";
const PhoneNumber = () => {
  return (
    <div className="form-group">
      <label htmlFor="phoneNumber">شماره تماس *</label>
      <input
        required
        type="number"
        name="phoneNumber"
        className="form-control"
        placeholder="09"
        // value={"number"}
        // onChange={(event) => this.handleUserInput(event)}
      />
      {/* <div className="panel panel-default">
        <FormErrors formErrors={this.state.formErrors.phoneNumber} />
      </div> */}
    </div>
  );
};
export default PhoneNumber;
