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
import { BrowserRouter as Router, useHistory, Route, Link, Switch } from 'react-router-dom';



function App() {
  const [fields, setFields] = useState([{ value: null }]);
  const [value, setValue] = useState(0);
  const [Arr, setArr ] = useState(0);

  const divStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
  };

  function handleChange(count, event) {
    const values = [...fields];
    values[count].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(count) {
    const values = [...fields];
    values.splice(count, 1);
    setFields(values);
  }

  const handleClick = (e) => {
    setValue(e.target.value)
    setArr(e.target.value)
  }


  return (
    <div className="App">
      <input type="text" />
        <button type="button" onClick={() => {handleAdd();handleClick()}} >
          Add Label
        </button>

        {fields.map((field, count) => {
          return (
            <div key={`${field}-${count}`} style={divStyle} >
              <input type="text" value={Arr} size="1" id={count} />
              <button
                type="button"
                onClick={() => {
                  handleRemove(count);
                }}
                id={count}
                
              >
                Remove
              </button>
            </div>
          );
        })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




