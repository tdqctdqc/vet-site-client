import AddVet from '../AddVet/AddVet.js';
import VetAddPatient from '../VetAddPatient/VetAddPatient.js';
import VetAddClient from '../VetAddClient/VetAddClient.js';
import DisplayVet from '../DisplayVet/DisplayVet.js';
import DisplayVetClients from '../DisplayVetClients/DisplayVetClients.js';
import DisplayVetClient from '../DisplayVetClient/DisplayVetClient.js';
import DisplayVetPatients from '../DisplayVetPatients/DisplayVetPatients.js';
import DisplayVets from '../DisplayVets/DisplayVets.js';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Vet({host}) {
    return (
        <Routes>
            <Route path='/:id' element={<DisplayVet host={host}/>}/>
            <Route path='/:id/addClient' element={<VetAddClient host={host}/>}/>
            <Route path='/:vetId/clients/:clientId' element={<DisplayVetClient host={host}/>}/>
            <Route path='/:id/clients' element={<DisplayVetClients host={host}/>}/>
            <Route path='/:id/patients' element={<DisplayVetPatients host={host}/>}/>
            <Route path='/addVet' element={<AddVet host={host}/>}/>
            <Route path='/' element={<DisplayVets host={host}/>}/>
        </Routes>
    );
    
}

export default Vet;