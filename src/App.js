import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header blogname="OGS" />
        <Card {...note} />
        <Footer text="Footer" />
      </div>
    )
  }
}

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "#ff0000"
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor() {
    this.setState({
      color: this.state.color === "#008000" ? "#ff0000" : "#008000"
    })
  }

  render() {
    return( 
    <div 
      onClick={() => this.changeColor()}
      style={{ backgroundColor: this.state.color}}>
        {this.props.blogname}
    </div>)
  }
}  

const Card = ({ title, body, description, img}) => {
  return (
  <div className="App-header">
    <div>{title}</div>
    <div>{description}</div>
    <div>{body}</div>
    <div>img</div>
  </div>
)}

function Footer(props) {
  return (
    <div>
      {props.text}
    </div>
  )
}

export default App;

const note = {
  title: "Test title",
  body: "Test body",
  decription: "Description"
}