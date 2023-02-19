import React from "react";

const Resume = () => {
  return (
    <div className="form-group">
      <div>
        <label htmlFor="resume">
          فایل رزومه (با فرمت های png , jpg یا pdf )*
        </label>
      </div>
      <input required type="file" name="resume" accept=".png,.pdf,.jpg" />
    </div>
  );
};
export default Resume;
