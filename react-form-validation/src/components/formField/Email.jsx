import React from "react";
import UserInput from "../../hooks/user-input";
const Email = () => {
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: EmailInputHasError,
    valueChangeHandler: EmailChangeHandler,
    inputBlurHandler: EmailBlurHandler
  } = UserInput((value) => value.trim() !== "");
  if (enteredEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    return enteredEmailIsValid;
  }
  return (
    <div className="form-group">
      <label htmlFor="email">ایمیل *</label>
      <input
        required
        type="email"
        name="email"
        className="form-control"
        value={enteredEmail}
        onBlur={EmailBlurHandler}
        onChange={EmailChangeHandler}
      />
      {EmailInputHasError && (
        <p className="formErrors"> ایمیل وارد شده نامعتبر است.</p>
      )}
    </div>
  );
};
export default Email;
