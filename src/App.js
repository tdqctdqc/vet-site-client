import AddVet from './AddVet/AddVet.js';
import Vet from './Vet/Vet.js';
import VetAddPatient from './VetAddPatient/VetAddPatient.js';
import VetAddClient from './VetAddClient/VetAddClient.js';
import DisplayVet from './DisplayVet/DisplayVet.js';
import DisplayVetClients from './DisplayVetClients/DisplayVetClients.js';
import DisplayVetClient from './DisplayVetClient/DisplayVetClient.js';
import DisplayVetPatients from './DisplayVetPatients/DisplayVetPatients.js';
import DisplayVets from './DisplayVets/DisplayVets.js';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
const HOST = 'http://localhost:3002';

function App() {
  return (
    <div className="App">
      
      <Router>
      {/* <Link to="/vet">Vet</Link> */}
       <Routes>
        
        <Route path='/vet/*' element={<Vet host={HOST}/>}/>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
