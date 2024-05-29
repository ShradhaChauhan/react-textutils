import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not.

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
      }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#162024';
        document.body.style.color = 'white';
        showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className='container my-3'>
          {/* <Routes>
            <Route exact path="/about" element={<About/>}></Route>
  <Route exact path="/" element={ */}
              <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
              {/* }></Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
