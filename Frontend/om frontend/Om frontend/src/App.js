
import './App.css';
import Appbar from './components/Appbar'
import Student from './components/Student'
import FindbyId from './components/FindbyId'
import FindbyName from './components/FindbyName'

function App() {
  return (
    <div className="App">
    <Appbar/>
    <Student/>
    <FindbyId />
   <FindbyName />
    </div>
  );
}

export default App;

