import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { createStream } from "../Actions";
import { connect } from "react-redux";

class StreamCreate extends Component {
  // For showing errror message
  renderErr = (touched, err) => {
    if (touched && err) {
      return (
        <div>
          <div style={{ color: "#EF6D6D" }}>{err}</div>
        </div>
      );
    }
  };

  // Helper function that passes as props to Field component and inside while the Field component runs, it runs the prop function passed with some args like {input, meta} so we can use them in the function, thats why formsProps are called as args, internally it will be passed by Field component while executing.
  inputHelper = (formProps) => {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" />
        {this.renderErr(formProps.meta.touched, formProps.meta.error)}
      </div>
    );
  };

  render() {
    const onSubmitHandler = (formValues) => {
      // Sending the data to backend server that is json server
      this.props.createStream(formValues);
    };
    return (
      // On form submit we have to call handleSubmit function provided by redux form, here we can work with onSubmit event Listner as we did earlier, so this handleSubmit takes a callback, that function will be called as soon as we submit the form, with the arguments are form values, which are actual value that are stored in the redux store. in this callback we can call to outside API and so on.
      <form
        onSubmit={this.props.handleSubmit(onSubmitHandler)}
        className="ui form error"
      >
        {/* whatever props we pass to filed that will be passes to input helper while executing like label.*/}
        <Field name="Title" component={this.inputHelper} label="Enter title" />
        <Field
          name="Description"
          component={this.inputHelper}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// For validating the form if the user has entered correct input or  this will be monitering the Field componet, whaen validate returns {}, then form thinks no error, when there is some content inside validate then error meassage will be shown.

const validate = (formValues) => {
  const err = {};
  if (!formValues.Title) {
    err.Title = "You must enter Title";
  }
  if (!formValues.Description) {
    err.Description = "You must enter Description";
  }
  return err;
};

// here value for form key has to be unique, beacuse all tha data related this form will be stored under this name.

// Returns a function
const createReduxForm = reduxForm({ form: "StreamCreate", validate });

const createConnect = connect(null, { createStream });

// The react componet always called with the above function returned.
export default createConnect(createReduxForm(StreamCreate));
