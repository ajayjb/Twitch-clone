import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../Actions";

function StreamList(props) {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  function streamsDisplay(list) {
    return list.map((e) => {
      return (
        <div className="item" key={e.id}>
          {props.currentUserId === e.userId ? renderAdmin(e.id) : <div></div>}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {e.Title}
            <div className="description">{e.Description}</div>
          </div>
        </div>
      );
    });
  }

  function renderAdmin(id) {
    return (
      <div className="right floated content">
        <button className="ui button primary">
          <Link style={{ color: "white" }} to={`stream/edit/${id}`}>
            Edit
          </Link>
        </button>
        <button className="ui red button negetive">
          <Link style={{ color: "white" }} to={`stream/delete/${id}`}>
            Delete
          </Link>
        </button>
      </div>
    );
  }

  function createNewStream() {
    return (
      <div className="ui yellow button primary">
        <Link style={{ color: "white" }} to="/stream/new">
          Create stream
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="ui celled list">{streamsDisplay(props.streams)}</div>
      <div style={{ textAlign: "right", marginTop: "30px" }}>
        {props.currentUserId && createNewStream()}
      </div>
    </>
  );
}

function mapStateTOProps(state) {
  // Object is class, in which streams is a method which takes object as argument and turns into arrays of vlues.
  return {
    streams: Object.values(state.streams),
    currentUserId: state.authState.userId,
  };
}

const createConnect = connect(mapStateTOProps, { fetchStreams: fetchStreams });

export default createConnect(StreamList);
