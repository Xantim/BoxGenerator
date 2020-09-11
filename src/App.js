import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoxenContext from './contexts/BoxenContext';
import BoxWrapper from './components/BoxWrapper';
import FormWrapper from './components/FormWrapper';



import './App.css';

function App() {
  const [boxen,setBoxen] = useState([]);
  const [color,setColor] = useState("");
  
  return (
    //create provider. shortform for key value pairs
    <BoxenContext.Provider value={{color, setColor, boxen, setBoxen}}> 
      <FormWrapper />  
      <BoxWrapper />
    </BoxenContext.Provider>
  );
}

export default App;
