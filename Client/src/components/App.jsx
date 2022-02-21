import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={StreamList()} />
          <Route path="/stream/new" element={<StreamCreate />} />
          <Route path="/stream/edit" element={<StreamEdit />} />
          <Route path="/stream/delete" element={<StreamDelete />} />
          <Route path="/stream/show" element={<StreamShow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
