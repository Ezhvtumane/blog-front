import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Note {...note} />
      </div>
    );
  }
}

const Note = ({ title, body }) => {
  return (
  <div className="App-header">
    <Title text={title} />
    <Body text={body} />
  </div>)
}

const Title = ({ text }) => {
  return (
    <div>
      {text}
    </div>
  )
}

const Body = ({ text }) => {
  return (
    <div>
      {text}
    </div>
  )
}

export default App;

const note = {
  title: "Test title",
  body: "Test body"
}