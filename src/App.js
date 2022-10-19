import AddVet from './AddVet/AddVet.js';
import './App.css';
const HOST = 'http://localhost:3002';

function App() {
  return (
    <div className="App">
      <AddVet host={HOST}/>
    </div>
  );
}

export default App;
