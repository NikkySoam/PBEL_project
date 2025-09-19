
import About from './pages/About';
import {BrowserRouter,Routes,Route,Link} from 'react-router'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Profile from './pages/Profile';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
