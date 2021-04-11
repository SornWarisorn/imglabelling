import React, { useState } from "react";
import { useFrameContext, FrameProvider } from "./frame";
import { Stage, Layer, Rect, Image, Transformer } from "react-konva";
import Create from './Create'


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
  
    function setDraww() {
      const values = [...annotationsToDraw];
      values.splice(1, 1);
      setAnnotations([]);
      setNewAnnotation([]);
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

  export default DrawAnnotations;