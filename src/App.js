import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div >
      <NavBar/>
      <Routes>
      <Route path = '/' element={<Home/>}></Route>
        

      <Route path='/signin' element={<SignIn />}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
