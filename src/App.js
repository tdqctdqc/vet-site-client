import AddVet from './AddVet/AddVet';
import './App.css';
const HOST = 'localhost:3002';

function App() {
  return (
    <div className="App">
      <AddVet host={HOST}/>
    </div>
  );
}

export default App;
