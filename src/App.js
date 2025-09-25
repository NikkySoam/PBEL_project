
import About from './pages/About';
import {BrowserRouter,Routes,Route,Link} from 'react-router'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
