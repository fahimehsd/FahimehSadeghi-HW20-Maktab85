import React from "react";
import Name from "./formField/Name";
import Email from "./formField/Email";
import CooperationPosition from "./formField/Cooperation";
import PhoneNumber from "./formField/PhoneNumber";
import Resume from "./formField/Resume";
const CooperationForm = () => {
  return (
    <form>
      <h1>فرم همکاری</h1>
      <Name />
      <Email />
      <CooperationPosition />
      <PhoneNumber />
      <Resume />
      <button type="submit">ارسال درخواست</button>
    </form>
  );
};
export default CooperationForm;
