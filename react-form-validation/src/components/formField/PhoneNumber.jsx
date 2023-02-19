import React from "react";
import UserInput from "../../hooks/user-input";
const PhoneNumber = () => {
  const {
    value: enteredPhoneNumber,
    isValid: enteredPhoneNumberIsValid,
    hasError: PhoneNumberInputHasError,
    valueChangeHandler: PhoneNumberChangeHandler,
    inputBlurHandler: PhoneNumberBlurHandler
  } = UserInput((value) => value.trim() !== "");
  if (enteredPhoneNumber.startsWith("09")) {
    return enteredPhoneNumberIsValid;
  }
  return (
    <div className="form-group">
      <label htmlFor="phoneNumber">شماره تماس *</label>
      <input
        required
        type="number"
        name="phoneNumber"
        className="form-control"
        placeholder="09"
        minLength={11}
        maxLength={11}
        value={enteredPhoneNumber}
        onBlur={PhoneNumberBlurHandler}
        onChange={PhoneNumberChangeHandler}
      />
      {PhoneNumberInputHasError && (
        <p className="formErrors"> شماره تماس وارد شده نامعتبر است.</p>
      )}
    </div>
  );
};
export default PhoneNumber;
