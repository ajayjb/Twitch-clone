import React from "react";
import Modal from "../Modal";
import { useParams } from "react-router-dom";
import { fetchStream } from "../Actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteStream } from "../Actions";

function StreamDelete(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    props.fetchStream(id);
  }, []);

  const currentStream = props.streams[id];

  const Buttons = () => {
    return (
      <>
        <button
          onClick={() => {
            props.deleteStream(id);
          }}
          className="ui primary button"
        >
          Delete
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="ui button"
        >
          Cancel
        </button>
      </>
    );
  };

  return (
    <div>
      <Modal
        title={"Delete stream"}
        content={`Would you like to delete ${
          currentStream ? currentStream.Title : "this"
        } stream ?`}
        Action={Buttons}
        onDismiss={"/"}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { streams: state.streams };
};

const createConnect = connect(mapStateToProps, { fetchStream, deleteStream });

export default createConnect(StreamDelete);
