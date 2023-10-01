// import { Navbar } from './components/Navbar';
import Homepage from './components/Homepage';
import './App.css';
import './fonts/Gemini Moon.otf' //Importing font
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/sketchy/bootstrap.min.css'
import 'bootswatch/dist/sketchy/bootstrap.css'
import Cards from './components/Cards';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects'
import ContactPage from './pages/ContactPage'
import { useState } from 'react';

function App() {
  const [loading,setloading] = useState(true)
  const spinner = document.getElementById('spinner')
  if(spinner){
    setTimeout(() => {
      spinner.style.display = "none";
      setloading(false)
    },1000);
  }
  return (
    !loading && (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/cards' element={<Cards/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
    )
  );
}

export default App;
