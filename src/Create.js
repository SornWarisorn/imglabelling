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
  const { width1, height1, width2, height2, count, len } = useFrameContext();

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

  function delvalue() {
    w1.splice(0, 1);
    w2.splice(0, 1);
    h1.splice(0, 1);
    h2.splice(0, 1);
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
                  handleRemove(count);
                  delvalue();
                }}
                id={count}
              >
                Remove
              </button>
              <button onClick={props.data} id={count}>
                {" "}
                Remove roi{" "}
              </button>
            </div>
          );
        })}
      </FrameProvider>
    </div>
  );
}

export default Create;
