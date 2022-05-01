import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import MyAccount from './Components/MyAccount/MyAccount';
import Blog from './Components/Blog/Blog';
import AddItems from './Components/AddItems/AddItems';
import ManageItem from './Components/ManageItems/HomeItem';
import Items from './Components/Items/Items';
import Contact from './Components/Contact/Contact';
import Update from './Components/UpdateItems/Update';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/manageItem' element={<ManageItem />}></Route>
        <Route path='/addItems' element={<AddItems />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

       
        <Route path='/update/:id' element={  
             <RequireAuth>
            <Update />
            </RequireAuth>
          }></Route>
       
        

        <Route path='/account' element={<MyAccount />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
