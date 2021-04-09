import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Stage, Layer, Rect, Image, Transformer } from "react-konva";
import useImage from "use-image";
import logo from "./bbb.jfif";
import pic from "./img.js";
import { useFrameContext, FrameProvider } from "./frame";
import { isTypeAliasDeclaration, setTextRange } from "typescript";
import "./index.css";

var obj1 = [[], []];
var w1 = [];
var w2 = [];
var h1 = [];
var h2 = [];

function DrawAnnotations() {
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
    //draw,
    //setDraw,
  } = useFrameContext();

  const [annotations, setAnnotations] = useState([]);
  const [newAnnotation, setNewAnnotation] = useState([]);

  const handleMouseDown = (event) => {
    if (newAnnotation.length === 0) {
      const { x, y } = event.target.getStage().getPointerPosition();
      setNewAnnotation([{ x, y, width: 0, height: 0, key: "0" }]);
      setCount(count + 1);
    }
  };

  const handleMouseUp = (event) => {
    if (newAnnotation.length === 1) {
      const sx = newAnnotation[0].x;
      const sy = newAnnotation[0].y;

      const { x, y } = event.target.getStage().getPointerPosition();
      const annotationToAdd = {
        x: sx,
        y: sy,
        width: x - sx,
        height: y - sy,
        key: annotations.length + 1,
      };
      setWidth1(sx);
      setHeight1(sy);
      //setCount(count + 1);
      setNewAnnotation([]);
      setAnnotations((prevAnnotation) => [...prevAnnotation, annotationToAdd]);
    }
  };

  const handleMouseMove = (event) => {
    if (newAnnotation.length === 1) {
      const sx = newAnnotation[0].x;
      const sy = newAnnotation[0].y;
      const { x, y } = event.target.getStage().getPointerPosition();

      setNewAnnotation([
        {
          x: sx,
          y: sy,
          width: x - sx,
          height: y - sy,
          key: "0",
        },
      ]);
      setWidth2(x);
      setHeight2(y);
    }
  };

  const annotationsToDraw = [...annotations, ...newAnnotation];

  function setDraww(count) {
    const values = [...annotationsToDraw];
    values.splice(count, 1);
    setAnnotations(values);
    setNewAnnotation(values);
  }

  return (
    <Stage
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onDblClick={setDraww}
      width={265}
      height={191}
    >
      <Layer>
        {annotationsToDraw.map((value) => {
          return (
            <Rect
              x={value.x}
              y={value.y}
              width={value.width}
              height={value.height}
              fill="transparent"
              stroke="black"
              //image={LionImage}
            ></Rect>
          );
        })}
      </Layer>
      
    </Stage>
  );
}

function Save() {
  const divStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
  };
  const { width1, height1, width2, height2, count } = useFrameContext();

  obj1[([count], [0])] = width1;
  obj1[([count], [1])] = width2;
  obj1[([count], [2])] = height1;
  obj1[([count], [3])] = height2;

  return (
    <>
      <div style={divStyle}>
        <label>Number</label>
        <br />
        <input type="text" value="    1" size="1" />
        <input
          type="text"
          value={
            obj1[([1], [1])] +
            "," +
            obj1[([1], [3])] +
            "  /  " +
            obj1[([1], [0])] +
            "," +
            obj1[([1], [2])]
          }
        />
        <input type="text" value="" />
        <br />

        <input type="text" value="    2" size="1" />
        <input
          type="text"
          value={
            obj1[([2], [1])] +
            "," +
            obj1[([2], [3])] +
            "  /  " +
            obj1[([2], [0])] +
            "," +
            obj1[([2], [2])]
          }
        />
        <input type="text" value="" />
        <br />

        <input type="text" value="    3" size="1" />
        <input
          type="text"
          value={
            obj1[([3], [1])] +
            "," +
            obj1[([3], [3])] +
            "  /  " +
            obj1[([3], [0])] +
            "," +
            obj1[([3], [2])]
          }
        />
        <input type="text" value="" />
        <br />

        <input type="text" value="    4" size="1" />
        <input
          type="text"
          value={
            obj1[([4], [1])] +
            "," +
            obj1[([4], [3])] +
            "  /  " +
            obj1[([4], [0])] +
            "," +
            obj1[([4], [2])]
          }
        />
        <input type="text" value="" />
        <br />

        <input type="text" value="    5" size="1" />
        <input
          type="text"
          value={
            obj1[([5], [1])] +
            "," +
            obj1[([5], [3])] +
            "  /  " +
            obj1[([5], [0])] +
            "," +
            obj1[([5], [2])]
          }
        />
        <input type="text" value="" />
        <br />

        <input type="text" value="count" size="1" />
        <input type="text" value={count} />
      </div>
    </>
  );
}

function Create() {
  const [fields, setFields] = useState([{ value: null }]);
  const { width1, height1, width2, height2, count } = useFrameContext();

  const divStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
  };

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  w1[count] = width1;
  w2[count] = width2;
  h1[count] = height1;
  h2[count] = height2;

  return (
    <div className="App">
      <button type="button" onClick={() => handleAdd()}>
        Add label
      </button>

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
            <button type="button" onClick={() => handleRemove(count)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

function App() {
  return (
    <FrameProvider>
      <div
        style={{
          backgroundImage: `url(${logo})`,
          width: 265,
          height: 191,
        }}
      >
        <DrawAnnotations />
      </div>
      <br />

      <Create />
    </FrameProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




