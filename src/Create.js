import React, { useState } from "react";
import { useFrameContext, FrameProvider } from "./frame";
import DrawAnnotations from "./Draw";
import { isPropertySignature } from "typescript";

var w1 = [];
var w2 = [];
var h1 = [];
var h2 = [];

function Create(props) {
  const [fields, setFields] = useState([{ value: null }]);
  const { width1, height1, width2, height2, count, len, setCount, aaa, setAaa, annotations, setAnnotations, newAnnotation, setNewAnnotation } = useFrameContext();

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

  function delvalue(count) {
    w1.splice(count, 1);
    w2.splice(count, 1);
    h1.splice(count, 1);
    h2.splice(count, 1);
  }

  function setDraw(aaa) {
    const values1 = [...annotations];
    const values2 = [...newAnnotation]; 
    values1.splice(aaa-1, 1);
    values2.splice(aaa-1, 1);
    setAnnotations(values1);
    setNewAnnotation(values2);
    setCount(count-1);
    //alert(aaa);
  }

  w1[count] = width1;
  w2[count] = width2;
  h1[count] = height1;
  h2[count] = height2;

  return (
    <div className="App">
      <FrameProvider>
        <button type="button" onClick={() => handleAdd()} >
          Add Label
        </button>
        <input type="text" value={count} />
        <input type="text" value={len} />

        {fields.map((field, count) => {
          return (
            <div key={`${field}-${count}`} style={divStyle}>
              <input type="text" value={count} size="1" id={count} />
              <input
                type="text"
                value={
                  w1[count] +
                  "," +
                  h1[count] +
                  "  /  " +
                  w2[count] +
                  "," +
                  h2[count]
                }
                id={count}
              />
              <input
                type="text"
                placeholder="Enter class name"
                value={field.value || ""}
                onChange={(e) => handleChange(count, e)}
              />
              <button
                type="button"
                onClick={() => {
                  handleRemove(count)
                  delvalue(count)
                  props.setdrw(count)
                  //setDraw(count)
                }}
                id={count}
              >
                Remove
              </button> 
            </div>
          );
        })}
      </FrameProvider>
    </div>
  );
}

export default Create;
