import AddVet from './AddVet/AddVet.js';
import VetAddPatient from './VetAddPatient/VetAddPatient.js';
import VetAddClient from './VetAddClient/VetAddClient.js';
import DisplayVet from './DisplayVet/DisplayVet.js';
import DisplayVetClients from './DisplayVetClients/DisplayVetClients.js';
import DisplayVetClient from './DisplayVetClient/DisplayVetClient.js';
import DisplayVetPatients from './DisplayVetPatients/DisplayVetPatients.js';
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
        <Route path='/vet/:id' element={<DisplayVet host={HOST}/>}/>
        {/* <Route path='/vet/:id/addPatient' element={<VetAddPatient host={HOST}/>}/> */}
        <Route path='/vet/:id/addClient' element={<VetAddClient host={HOST}/>}/>
        <Route path='/vet/:vetId/clients/:clientId' element={<DisplayVetClient host={HOST}/>}/>
        <Route path='/vet/:id/clients' element={<DisplayVetClients host={HOST}/>}/>
        <Route path='/vet/:id/patients' element={<DisplayVetPatients host={HOST}/>}/>
        <Route path='/vet/addVet' element={<AddVet host={HOST}/>}/>
        
       </Routes>
      </Router>
    </div>
  );
}

export default App;
