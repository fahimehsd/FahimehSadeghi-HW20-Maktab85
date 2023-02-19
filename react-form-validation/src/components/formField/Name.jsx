import React from "react";
import UserInput from "../../hooks/user-input";

const Name = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: NameInputHasError,
    valueChangeHandler: NameChangeHandler,
    inputBlurHandler: NameBlurHandler
  } = UserInput((value) => value.trim() !== "");
  if (enteredName.match(/^[a-zA-Z]+ [a-zA-Z]+$/ || /^[\u0600-\u06FF\s]+$/)) {
    return enteredNameIsValid;
  }
  return (
    <div className="form-group">
      <label htmlFor="fullName">نام *</label>
      <input
        required
        type="text"
        name="name"
        minLength={3}
        className="form-control"
        value={enteredName}
        onBlur={NameBlurHandler}
        onChange={NameChangeHandler}
      />
      {NameInputHasError && (
        <p className="formErrors"> نام وارد شده نامعتبر است.</p>
      )}
    </div>
  );
};
export default Name;
