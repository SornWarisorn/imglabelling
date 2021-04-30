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

var arr =[];

function App() {

  const [value, setValue] = useState(0);

  const handleClick = (e) => {
    setValue(e.target.value)
    arr.push(e.target.value)
  }

  return (
    <FrameProvider>
      
      <div
        style={{
          backgroundImage: `url(${logo})`,
          width: 265,
          height: 191,
        }}
        class="pos"
      >
        <DrawAnnotations />
      </div>  
      <Create />
      <input type="text"/>
      <button onChange={handleClick}>sdfsfds</button>
      <input type="text" value={arr} />
    </FrameProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




