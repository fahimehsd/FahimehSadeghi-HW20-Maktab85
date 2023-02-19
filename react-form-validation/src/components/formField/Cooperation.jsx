import React from "react";
import UserInput from "../../hooks/user-input";
const CooperationPosition = () => {
  const {
    value: enteredCooperationPosition,
    isValid: enteredCooperationPositionIsValid,
    hasError: CooperationPositionInputHasError,
    valueChangeHandler: CooperationPositionChangeHandler,
    inputBlurHandler: CooperationPositionBlurHandler
  } = UserInput((value) => value.trim() !== "");
  if (enteredCooperationPosition.trim() !== "") {
    return enteredCooperationPositionIsValid;
  }
  return (
    <div className="form-group">
      <label htmlFor="cooperationPosition">موقعیت همکاری *</label>
      <input
        required
        type="text"
        name="cooperationPosition"
        className="form-control"
        value={enteredCooperationPosition}
        onBlur={CooperationPositionBlurHandler}
        onChange={CooperationPositionChangeHandler}
      />
      {CooperationPositionInputHasError && (
        <p className="formErrors"> موقعیت همکاری وارد شده نامعتبر است.</p>
      )}
    </div>
  );
};
export default CooperationPosition;
