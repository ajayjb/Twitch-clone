import React, { Component } from "react";
import { createStream } from "../Actions";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";

class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <>
        <h2>Create a Stream</h2>
        <StreamForm onSubmit={this.onSubmit} />
      </>
    );
  }
}

const createConnect = connect(null, { createStream });

// The react componet always called with the above function returned.
export default createConnect(StreamCreate);
