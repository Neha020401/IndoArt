import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import Auth from './Components/Auth/Auth';
import Footer from './Footer/Footer';
import ChatRoom from './Components/Chat/ChatRoom';
import AboutUs from './Components/Aboutus/AboutUs';
import SocialResponsibility from './Components/SocialResponsibility/SocialResponsibility';

function App() {
  return (
 <div>
<Navbar/>
<Routes>
<Route  excat path='/' element={<Home/>}/>
<Route path='/auth' element={<Auth/>}/>
<Route path='/chatRoom' element={<ChatRoom/>}/>
<Route path='/aboutus' element={<AboutUs/>}/>
<Route path='/social-resposibility' element={<SocialResponsibility/>}/>
</Routes>
<Footer />
 </div>
  );
}

export default App;
