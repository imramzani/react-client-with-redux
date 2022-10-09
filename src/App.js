import './App.css';
import PhoneList from './store/list';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
   <Routes>
     <Route path='/' element={<PhoneList/>}/>
   </Routes>
  );
}

export default App;
