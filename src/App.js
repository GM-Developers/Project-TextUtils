import { useState } from 'react';
import './App.css';
import About from './customComponents/About';
import Navbar from './customComponents/Navbar'
import Alert from './customComponents/Alert';
import Textform from './customComponents/Textform';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

function App() {
    const [alert, setAlert] = useState(null);
  
    const showAlert = (message, type)=>{
    setAlert({
        msg: message, 
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      }, 2000);
    }
  
    const [mode, setMode] = useState('light');
    const toggleMode = ()=>{
      if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#030e25';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'initial';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
    } 
  
    const [yellow, setYellow] = useState(null)
    const toggleYellow = ()=>{
      if(yellow === null){
        setYellow('#4d004d');
        document.body.style.backgroundColor = '#df80ff';
        showAlert("Mode2 mode has been enabled", "success");
      }
      else{
        setYellow(null);
        document.body.style.backgroundColor = null;
        showAlert("Light mode has been enabled", "success");
      }
    }
  
    const [orange, setOrange] = useState(null)
    const toggleOrange = ()=>{
      if(orange === null){
        setOrange('#801a00');
        document.body.style.backgroundColor = '#ff704d';
        showAlert("Mode3 mode has been enabled", "success");
      }
      else{
        setOrange(null);
        document.body.style.backgroundColor = null;
        showAlert("Light mode has been enabled", "success");
      }
    }
  
    const [red, setRed] = useState(null)
    const toggleRed = ()=>{
      if(red === null){
        setRed('#99004d');
        document.body.style.backgroundColor = '#ff4da6';
        showAlert("Red mode has been enabled", "success");
      }
      else{
        setOrange(null);
        document.body.style.backgroundColor = null;
        showAlert("Light mode has been enabled", "success");
      }
    }

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils2" textAbout="About Us" mode={mode} yellow={yellow} orange={orange} red={red} toggleRed={toggleRed} toggleOrange={toggleOrange} toggleYellow={toggleYellow} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
       <Route path="/about" element={<About />}/>
        <Route path='/' element={<Textform heading="Leave Your Feedback" showAlert={showAlert} mode={mode} yellow={yellow} />}/>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}


export default App;
