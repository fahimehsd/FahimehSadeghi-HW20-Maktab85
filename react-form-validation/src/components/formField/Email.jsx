import React from "react";
const Email = () => {
  return (
    <div className="form-group">
      <label htmlFor="email">ایمیل *</label>
      <input
        required
        type="email"
        name="email"
        className="form-control"
        // value={this.state.email}
        // onChange={(event) => this.handleUserInput(event)}
      />
      {/* <div className="panel panel-default">
        <FormErrors formErrors={this.state.formErrors.email} />
      </div> */}
    </div>
  );
};
export default Email;
