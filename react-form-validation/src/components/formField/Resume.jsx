import React from "react";
const Resume = () => {
  return (
    <div className="form-group">
      <div>
        <label htmlFor="resume">
          فایل رزومه (با فرمت های png , jpg یا pdf )*
        </label>
      </div>
      <input
        required
        type="file"
        name="resume"
        //value={"resume"}
        // onChange={(event) => this.handleUserInput(event)}
      />
      {/* <div className="panel panel-default">
        <FormErrors formErrors={this.state.formErrors.resume} />
      </div> */}
    </div>
  );
};
export default Resume;
