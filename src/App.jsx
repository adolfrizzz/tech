import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/header';
import About from './pages/About/about'
import Contact  from './pages/contact/contact';
import Home from './pages/Home/home';
import Footer from './components/Footer/footer';
import Services from './pages/services/services.jsx';

function App() {
  return (
<div className='App'>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/> 
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/services' element={<Services/>}/> 
</Routes>
<Footer/>
</div>
  );
}
export default App;

