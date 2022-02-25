import streams from "../api";

// Action creater for user sign in.
const signIn = (value) => {
  return { type: "SIGN_IN", payload: value };
};

// Action creater for user sign out.
const signOut = () => {
  return { type: "SIGN_OUT" };
};

// Action creater for creating stream.
const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().authState;
    try {
      const res = await streams.post("/streams", {
        ...formValues,
        userId: userId,
      });
      dispatch({ type: "CREATE_STREAM", payload: res.data });
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };
};

// Action creater for fetching all streams.
const fetchStreams = () => {
  return async (dispatch) => {
    const res = await streams.get("/streams");
    dispatch({ type: "FETCH_STREAMS", payload: res.data });
  };
};

// Action creater for fetching particular stream with id.
const fetchStream = (id) => {
  return async (dispatch) => {
    const res = await streams.get(`/streams/${id}`);
    dispatch({ type: "FETCH_STREAM", payload: res.data });
  };
};

// Action creater for deleting a stream.
const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: "DELETE_STREAM", payload: id });
  };
};

// Action creater for editing a stream
const editStream = (id, values) => {
  return async (dispatch) => {
    const res = await streams.put(`/streams/${id}`, values);
    dispatch({ type: "EDIT_STREAM", payload: res.data });
  };
};

export {
  signIn,
  signOut,
  createStream,
  fetchStreams,
  fetchStream,
  deleteStream,
  editStream,
};
