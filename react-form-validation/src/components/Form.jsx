import React, { Component } from "react";
import { FormErrors } from "./FormErrors";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      cooperationPosition: "",
      phoneNumber: "",
      resume: "",
      formErrors: {
        name: "",
        email: "",
        cooperationPosition: "",
        phoneNumber: "",
        resume: ""
      },
      nameValid: false,
      emailValid: false,
      cooperationPositionValid: false,
      phoneNumberValid: false,
      resumeValid: false,
      formValid: false
    };
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let cooperationPositionValid = this.state.cooperationPositionValid;
    let phoneNumberValid = this.state.phoneNumberValid;
    let resumeValid = this.state.resumeValid;

    switch (fieldName) {
      case "name":
        nameValid = value.match(
          /^[a-zA-Z]+ [a-zA-Z]+$/ && /^[\u0600-\u06FF\s]+$/
        );
        fieldValidationErrors.name = nameValid
          ? ""
          : "نام وارد شده نامعتبر است.";
        break;

      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid
          ? ""
          : "ایمیل وارد شده نامعتبر است.";
        break;

      case "cooperationPosition":
        cooperationPositionValid = value.length > 0;
        fieldValidationErrors.cooperationPosition = cooperationPositionValid
          ? ""
          : "موقعیت همکاری وارد شده نامعتبر است.";
        break;

      case "phoneNumber":
        phoneNumberValid = value.length === 11;
        fieldValidationErrors.phoneNumber = phoneNumberValid
          ? ""
          : " شماره تماس وارد شده نامعتبر است.";
        break;

      case "resume":
        resumeValid = value.includes("jpg" || "png" || "pdf");
        fieldValidationErrors.resume = resumeValid
          ? ""
          : " فایل وارد شده نامعتبر است.";
        break;

      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid: nameValid,
        emailValid: emailValid,
        cooperationValid: cooperationPositionValid,
        phoneNumberValid: phoneNumberValid,
        resumeValid: resumeValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.emailValid &&
        this.state.cooperationValid &&
        this.state.phoneNumberValid &&
        this.state.resumeValid
    });
  }

  handleUserInput(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("hello");
  }
  render() {
    return (
      <form className="formContainer" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">نام *</label>
          <input
            required
            type="text"
            name="name"
            minLength={3}
            className="form-control"
            value={this.state.name}
            onChange={(event) => this.handleUserInput(event)}
          />
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors.name} />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">ایمیل *</label>
          <input
            required
            type="email"
            name="email"
            className="form-control"
            value={this.state.email}
            onChange={(event) => this.handleUserInput(event)}
          />
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors.email} />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="cooperationPosition">موقعیت همکاری *</label>
          <input
            required
            type="text"
            name="cooperationPosition"
            className="form-control"
            value={this.state.cooperationPosition}
            onChange={(event) => this.handleUserInput(event)}
          />
          <div className="panel panel-default">
            <FormErrors
              formErrors={this.state.formErrors.cooperationPosition}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">شماره تماس *</label>
          <input
            required
            type="number"
            name="phoneNumber"
            className="form-control"
            placeholder="09"
            value={this.state.phoneNumber}
            onChange={(event) => this.handleUserInput(event)}
          />
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors.phoneNumber} />
          </div>
        </div>

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
            value={this.state.resume}
            onChange={(event) => this.handleUserInput(event)}
          />
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors.resume} />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!this.state.formValid}
        >
          ارسال درخواست
        </button>
      </form>
    );
  }
}
export default Form;
