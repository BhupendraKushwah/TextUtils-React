import './App.css';
import Navbar from './Component/Navbar';
import TextInput from './Component/Text-input';
import Alert from './Component/Alert';
// import Contact from './Component/Contact';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App(props) {
  const style = {
    backgroundColor: "#222"
  }
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState('null')

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const ToggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#222"
      setMode("dark")
      showAlert('Dark Mode is enabled', 'success')
    }
    else {
      document.body.style.backgroundColor = "white"
      setMode("light")
      showAlert('Light mode is enabled', 'success')

    }
  }

  return (
    // <Router>
      <>
        <Navbar title="Text-Utils" style={style} mode={mode} ToggleMode={ToggleMode} Alert={showAlert} />
        <div style={{ height: '50px' }}>
          <Alert alert={alert} />
        </div>
        <div className='container my-3'>
            <TextInput mode={mode} showAlert={showAlert} />
          </div>
    
      {/* <Switch>
        <Route exact path="/Contact">
          <div className='container my-3'>
            <Contact mode={mode} />
          </div>
        </Route>
        <Route exact path="/">
          <div className='container my-3'>
            <TextInput mode={mode} showAlert={showAlert} />
          </div>
        </Route>
      </Switch> */}
      </>
  );
}

export default App;
