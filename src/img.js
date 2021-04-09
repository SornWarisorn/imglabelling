import React, { Component } from 'react'
class pic extends Component{ 
  constructor(props){  
    super(props)  
  
    // Initialize count state  
    this.state = {show : false} 
    // Bind context of 'this' 
    this.handleClick = this.handleClick.bind(this) 
    // Create reference of DOM object 
    this.imgRef = React.createRef() 
  }  
  
  renderDetails() { 
    return this.state.show ?  
      // Accessing image details using imgRef 
      <div> 
          
<p><strong>Height : </strong>  
        {this.imgRef.current.clientHeight}px</p> 
  
          
<p><strong>Width : </strong>  
        {this.imgRef.current.clientWidth}px</p> 
  
      </div> : null
  } 
  
  handleClick(){ 
  
    // Update state value 
    this.setState({ 
      show : true
    }) 
  } 
  
  render(){ 
    return(  
      <div>  
        <h3>GeeksforGeeks</h3> 
        {/* Assign reference to DOM element     */} 
        <img ref={this.imgRef} src= 
'https://media.geeksforgeeks.org/wp-content/uploads/20200617121258/gfg-image2-300x177.png' alt='gfg' /> 
        <div> 
          <button onClick={this.handleClick}>Get image details</button> 
        </div> 
        {this.renderDetails()} 
      </div>     
    )   
  }  
} 
export default pic