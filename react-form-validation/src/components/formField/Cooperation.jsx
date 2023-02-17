import React from "react";
const CooperationPosition = () => {
  return (
    <div className="form-group">
      <label htmlFor="cooperationPosition">موقعیت همکاری *</label>
      <input
        required
        type="text"
        name="cooperationPosition"
        className="form-control"
        // value={this.state.cooperationPosition}
        // onChange={(event) => this.handleUserInput(event)}
      />
      {/* <div className="panel panel-default">
        <FormErrors formErrors={this.state.formErrors.cooperationPosition} />
      </div> */}
    </div>
  );
};
export default CooperationPosition;
