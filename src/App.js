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
import Class from './Class'
import {App2} from './Create'


 function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component ={App2}></Route>
        <Route exact path ="/Label" component ={Class} ></Route> 
         
      </Switch>
    </Router>

)
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);




