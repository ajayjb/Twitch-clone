import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { fetchStream, editStream } from "../Actions";
import StreamForm from "./StreamForm";

// Now in updated redux we can use useSelector hook equal to map states to props, and useDispath hook for dispatching actions. thats story for another so here we will stick to Stephen grinder.

function StreamEdit(props) {
  // Getting id param using useParams hook;
  const para = useParams();
  const path = para.id;

  const currentStream = props.streams[path];

  useEffect(() => {
    props.fetchStream(path);
  }, []);

  const onSubmit = (formvalues) => {
    props.editStream(path, formvalues);
  };

  return (
    <div>
      <h2>Edit Stream</h2>
      <StreamForm
        initialValues={{
          Title: currentStream.Title,
          Description: currentStream.Description,
        }}
        onSubmit={onSubmit}
      />
    </div>
  );
}

function mapStateTOProps(state) {
  return { streams: state.streams };
}

const createConnect = connect(mapStateTOProps, { fetchStream, editStream });

export default createConnect(StreamEdit);

//Getting redux store state using useSelect hook
// const selector = useSelector((state) => {
//   console.log(state);
//   return state.streams[path];
// });

// Other method of getting id
// const url = window.location.pathname;
// const path = url.split("/");
// const id = path[path.length - 1];
