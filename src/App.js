import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState} from 'react'


function App() {
  const [Mode, setMode] = useState('light'); // Whether Dark mode is enabled or not

  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Navbar title = "TextUtils" aboutText="About" mode={Mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading = "Enter the text to analyze below" mode={Mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
