import React, { useState } from "react";
import { useFrameContext, FrameProvider } from "./frame";
import { Stage, Layer, Rect, Image, Transformer} from "react-konva";
import Portal from './Portal';
import Create from './Create'
import { isPropertySignature } from "typescript";


function DrawAnnotations(props) {
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
        setLen(annotationsToDraw.length);
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
      const values1 = [...annotations];
      const values2 = [...newAnnotation];
      //values1.reverse();
      //values2.reverse();
      values1.splice(0, 1);
      values2.splice(0, 1);
      setAnnotations(values1);
      setNewAnnotation(values2);
      setCount(count -1);
    }
  
    return (
       
      <Stage
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        width={265}
        height={191}
        
      >
        
        <Layer>
        <FrameProvider>
          <Portal>
            
              <Create data={setDraww} />
              
          </Portal>
        </FrameProvider>  
          {annotationsToDraw.map((value) => {
            return (
              <Rect
                x={value.x}
                y={value.y}
                width={value.width}
                height={value.height}
                fill="transparent"
                stroke="black"
              ></Rect>
            );
          })}
          
        </Layer>
        
      </Stage>
      
    );
  }

export default DrawAnnotations;