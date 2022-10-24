import Vet from './Vet/Vet.js';
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
      {/* <Link to="/vet">Vets</Link> */}
       <Routes>
        <Route path='/vet/*' element={<Vet host={HOST}/>}/>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
