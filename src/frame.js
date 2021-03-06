import React, {useState, useContext} from "react"

export const FrameContext = React.createContext({})


export const useFrameContext = () => useContext(FrameContext)


export const FrameProvider = (props) => {
  const [width1, setWidth1] = useState(0)
  const [height1, setHeight1] = useState(0)
  const [width2, setWidth2] = useState(0)
  const [height2, setHeight2] = useState(0)
  const [count, setCount] = useState(0)
  const [len, setLen] = useState(0)
  const [aaa,setAaa] = useState(0)
  const [annotations, setAnnotations] = useState([])
  const [newAnnotation, setNewAnnotation] = useState([])
  const [cls, setCls] = useState([])
  const [opacity1,setOpacity1] = useState([])
  const [opacity2,setOpacity2] = useState([])
  const value = {
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
    opacity1,
    setOpacity1,
    opacity2,
    setOpacity2,
  }
  return <FrameContext.Provider value={value} {...props} />
}

