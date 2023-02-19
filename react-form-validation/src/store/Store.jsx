import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
  // name: "cooperation-form",
  // initialState: [],
  // reducers: {
  //   getInfo: (state, action) => {
  //     state.push(action.payload);
  //   }
    // validateField(fieldName, value) {
    //   let fieldValidationErrors = this.state.formErrors;
    //   let nameValid = this.state.nameValid;
    //   let emailValid = this.state.emailValid;
    //   let cooperationPositionValid = this.state.cooperationPositionValid;
    //   let phoneNumberValid = this.state.phoneNumberValid;
    //   let resumeValid = this.state.resumeValid;
    //   switch (fieldName) {
    //     case "name":
    //       nameValid = value.match(
    //         /^[a-zA-Z]+ [a-zA-Z]+$/ && /^[\u0600-\u06FF\s]+$/
    //       );
    //       fieldValidationErrors.name = nameValid
    //         ? ""
    //         : "نام وارد شده نامعتبر است.";
    //       break;
    //     case "email":
    //       emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    //       fieldValidationErrors.email = emailValid
    //         ? ""
    //         : "ایمیل وارد شده نامعتبر است.";
    //       break;
    //     case "cooperationPosition":
    //       cooperationPositionValid = value.length > 0;
    //       fieldValidationErrors.cooperationPosition = cooperationPositionValid
    //         ? ""
    //         : "موقعیت همکاری وارد شده نامعتبر است.";
    //       break;
    //     case "phoneNumber":
    //       phoneNumberValid = value.length === 11;
    //       fieldValidationErrors.phoneNumber = phoneNumberValid
    //         ? ""
    //         : " شماره تماس وارد شده نامعتبر است.";
    //       break;
    //     case "resume":
    //       resumeValid = value.includes("jpg" || "png" || "pdf");
    //       fieldValidationErrors.resume = resumeValid
    //         ? ""
    //         : " فایل وارد شده نامعتبر است.";
    //       break;
    //     default:
    //       break;
    //   }
    //   this.setState(
    //     {
    //       formErrors: fieldValidationErrors,
    //       nameValid: nameValid,
    //       emailValid: emailValid,
    //       cooperationValid: cooperationPositionValid,
    //       phoneNumberValid: phoneNumberValid,
    //       resumeValid: resumeValid
    //     },
    //     this.validateForm
    //   );
    // },
    // validateForm() {
    //   this.setState({
    //     formValid:
    //       this.state.nameValid &&
    //       this.state.emailValid &&
    //       this.state.cooperationValid &&
    //       this.state.phoneNumberValid &&
    //       this.state.resumeValid
    //   });
    // },
    // handleUserInput(e) {
    //   e.preventDefault();
    //   const name = e.target.name;
    //   const value = e.target.value;
    //   this.setState({ [name]: value }, () => {
    //     this.validateField(name, value);
    //   });
    // }
  }
});

// export const { incremented, decremented } = userSlice.actions;

const store = configureStore({
  reducer: userSlice.reducer
});
