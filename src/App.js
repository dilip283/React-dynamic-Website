import './App.css';
import Home from './Home';
import { Routes ,Route } from 'react-router-dom';
import About from './pages/About';
import Service from './pages/Service';
import Contactus from './pages/Contactus';
import Error from './pages/Error';


const App = () => {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/contact' element={<Contactus/>}></Route>
        <Route element={<Error/>}></Route>

      </Routes>
    </>

  );
}

export default App;
