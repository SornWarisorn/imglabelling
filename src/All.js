import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Stage, Layer, Rect, Image, Transformer } from "react-konva";
import useImage from "use-image";
import logo from "./bbb.jfif";
import pic from "./img.js";
import { useFrameContext, FrameProvider } from "./frame";
import { isTypeAliasDeclaration, setTextRange } from "typescript";
import "./index.css";
import Create from "./Create";
import DrawAnnotations from "./Draw";
//import { BrowserRouter as Router, useHistory, Route, Link, Switch } from 'react-router-dom';
import Class from "./Class";
import { useHistory } from "react-router";

var arr = [];

function App2(){
  const [email, setEmail] = useState('')

  const {
    width1,
    height1,
    width2,
    height2,
    count,
    len,
    setLen,
    setCount,
    aaa,
    setAaa,
    annotations,
    setAnnotations,
    newAnnotation,
    setNewAnnotation,
    cls,
    setCls,
  } = useFrameContext();

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

  function handlePush() {
    const asd = [...arr];
    setCls(asd);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Enter text"
          onChange={handleEmailChange}
          value={email}
        />
      </div>
      <button type="submit" onClick={handlePush}>
        Submit
      </button>
      <input type="text" value={arr} />
      <button onClick={handleClick}>Done</button>
    </form>
  )
}

export default App2;
