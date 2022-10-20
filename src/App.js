import AddVet from './AddVet/AddVet.js';
import DisplayVet from './DisplayVet/DisplayVet.js';

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
        <Route path='/vet/addVet' element={<AddVet host={HOST}/>}/>
        
       </Routes>
      </Router>
    </div>
  );
}

export default App;
