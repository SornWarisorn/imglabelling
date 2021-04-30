import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Stage, Layer, Rect, Image, Transformer } from "react-konva";
import useImage from "use-image";
import logo from "./bbb.jfif";
import pic from "./img.js";
import { useFrameContext, FrameProvider } from "./frame";
import { isTypeAliasDeclaration, setTextRange } from "typescript";
import "./index.css";
import Create from './Create'
import DrawAnnotations from './Draw'
//import { BrowserRouter as Router, useHistory } from 'react-router-dom';



function App() {

  const [value, setValue] = useState(0);
  const [Arr, setArr ] = useState(0);

  const handleClick = (e) => {
    setValue(e.target.value)
    setArr(e.target.value)
  }

  return (
    <FrameProvider>
      <input type="text"/>
      <button onChange={handleClick}>sdfsfds</button>
      <input type="text" value={Arr} />
    </FrameProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




