import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { contact } from "../actions/index";

class Contact extends Component {
  renderField(field) {
    const {
      meta: { touched, error },
      label
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input className="form-control" type="email" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }
  renderFieldBig(field) {
    const {
      meta: { touched, error },
      label
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }
  onSubmit(values) {
    this.props.contact(values);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Email" name="email" component={this.renderField} />
        <Field label="Request" name="request" component={this.renderFieldBig} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Enter an email";
  }
  if (!values.request) {
    errors.request = "Enter a request";
  }

  return errors;
}
export default reduxForm({
  validate,
  form: "ContactForm"
})(
  connect(
    null,
    { contact }
  )(Contact)
);
