import React, { useState } from "react";
import { useFrameContext, FrameProvider } from "./frame";
import DrawAnnotations from "./Draw";
import { isPropertySignature } from "typescript";
//import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem, DropdownButton } from 'reactstrap';
//import Dropdown from '/node-modules/react-dropdown';
//import { Dropdown } from "semantic-ui-react";
//import DropdownExampleDropdown from './Dropdown' ;
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./Create.css";
import { useHistory } from "react-router";

var w1 = [];
var w2 = [];
var h1 = [];
var h2 = [];

const lv = ["Lv.0", "LV.1", "LV.2", "LV.3"];
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
  const [email, setEmail] = useState("");
  const [fields, setFields] = useState([{ value: null }]);

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
    if (arr.length == 0) {
      setFields(values);
    } else {
      values.push({ value: null });
      setFields(values);
    }
  }

  function handleRemove(count) {
    const values = [...fields];
    values.splice(count, 1);
    setFields(values);
  }

  let history = useHistory();

  function handleClick() {
    history.push("/Label");
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    arr.push(email);
    setEmail("");
  };

  function delvalue(count) {
    arr.splice(count, 1);
  }

  return (
    <FrameProvider>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter class name"
            onChange={handleEmailChange}
            value={email}
            class="poswhh"
          />
        </div>
        <button type="submit" onClick={() => handleAdd()} class="button_Addd">
          Add Class
        </button>
        <button onClick={handleClick} class="button_Addd">
          Done
        </button>
        {fields.map((field, count) => {
          return (
            <div key={`${field}-${count}`} style={divStyle} class="pos_button">
              <input
                type="text"
                value={count + 1}
                size="1"
                id={count}
                class="num"
              />
              <input type="text" value={arr[count]} id={count} class="poswh" />
              <button
                type="button"
                onClick={() => {
                  handleRemove(count);
                  delvalue(count);
                }}
                id={count}
                class="button_Remove"
              >
                Remove
              </button>
            </div>
          );
        })}
      </form>
    </FrameProvider>
  );
}

// export default App2;

function Create(props) {
  const [fields, setFields] = useState([{ value: null }]);
  const {
    width1,
    height1,
    width2,
    height2,
    count,
    len,
    setCount,
    aaa,
    setAaa,
    annotations,
    setAnnotations,
    newAnnotation,
    setNewAnnotation,
  } = useFrameContext();

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
    values1.splice(aaa, 1);
    values2.splice(aaa, 1);
    setAnnotations(values1);
    setNewAnnotation(values2);
    setCount(count - 1);
    //alert(aaa);
  }

  w1[count] = width1;
  w2[count] = width2;
  h1[count] = height1;
  h2[count] = height2;

  return (
    <div className="App">
      <FrameProvider>
        <button type="button" onClick={() => handleAdd()} class="button_Add">
          Add Label
        </button>

        {fields.map((field, count) => {
          return (
            <div key={`${field}-${count}`} style={divStyle} class="pos_button">
              <input
                type="text"
                value={count + 1}
                size="1"
                id={count}
                class="num"
              />
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
                class="poswh"
              />
              <select class="select" id={count}>
                {arr.map((arr) => (
                  <option value={arr} id={count}>{arr}</option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => {
                  handleRemove(count);
                  delvalue(count);
                  //props.setdrw(count);
                  setDraw(count);
                }}
                id={count}
                class="button_Remove"
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

export { Create as default, App2 };
