import { useState } from 'react';
import './App.css';

//Components
import ComboBox from './Components/ComboBox'
import InfoBox from './Components/InfoBox'

function App() {

  const [info, setInfo] = useState([]);

  return (
    <div className="App">

      <div className="menuDiv">
        <h2>Välj program i menyn</h2>
        <ComboBox setInfo={setInfo} />
      </div>

      <div className="infoBox center">
        <InfoBox info={info} />
      </div>

    </div>
  );
}

export default App;