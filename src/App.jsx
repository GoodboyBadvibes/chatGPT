import './App.css';
import 'remixicon/fonts/remixicon.css'
import {
  BrowserRouter,
  Routes,
  Route,

} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import { useNavigate } from 'react-router-dom';

function App() {

  
  return (
    <div className="app">
     <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Login/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
