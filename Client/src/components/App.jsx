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
          <Route path="/" element={<StreamList />} />
          <Route path="/stream/new" element={<StreamCreate />} />
          <Route path="/stream/edit/:id" element={<StreamEdit />} />
          <Route path="/stream/delete/:id" element={<StreamDelete />} />
          <Route path="/streams/:id" element={<StreamShow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// In path anything you put after : will be considered as variable.

// History is object created by BrowserRouter, whenever we change the path name in history object some changes related to path will happen, so when this thing happen BrowserRouter will listen to it it tells Routes components to swith to correct route. this is the history object created by BrowserRouter. Lets say if the want to programmatically switch to different route, in that case the way is to create your own history object as illustrated above. (This feature is deprecated in react-router-dom v6.)
