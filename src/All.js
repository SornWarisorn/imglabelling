import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Stage, Layer, Rect, Image, Transformer } from "react-konva";
import useImage from "use-image";
import logo from "./bbb.jfif";
import pic from "./img.js";
import { useFrameContext, FrameProvider } from "./frame";
import "./index.css";
import Create from "./Create";
import DrawAnnotations from "./Draw";
import Class from "./Class";
import { useHistory } from "react-router";

const arr = [];

function App2() {
  const {
    width1,
    setWidth1,
    height1,
    setHeight1,
    width2,
    setWidth2,
    height2,
    setHeight2,
    count,
    setCount,
    len,
    setLen,
    aaa,
    setAaa,
    annotations,
    setAnnotations,
    newAnnotation,
    setNewAnnotation,
    cls,
    setCls,
  } = useFrameContext();
  const [email, setEmail] = useState('')


let history = useHistory();

function handleClick() {
  history.push("/Label");
}

const handleEmailChange = event => {
  setEmail(event.target.value)
};

const handleSubmit = event => {
  event.preventDefault();
  arr.push(email);
};



return (
  <FrameProvider>
  <form onSubmit={handleSubmit}>
    <div>
      <input
        type="text"
        placeholder="Enter text"
        onChange={handleEmailChange}
        value={email}
      />
    </div>
    <button type="submit" >
      Submit
    </button>
    <input type="text" value={arr} />
    <button onClick={handleClick}>Done</button>
  </form>
  </FrameProvider>
)
}

export default App2;
