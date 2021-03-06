import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { saveDate } from './socket'

class App extends Component {
  clickHandler = () => {
    let date = Date.now()
    saveDate(date.toString())
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.clickHandler}>Save Date</button>
        </header>
      </div>
    )
  }
}

export default App
