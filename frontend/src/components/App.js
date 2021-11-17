import Login from './Login';
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Nav from "./Nav";
import SideBar from "./SideBar";



function App() {
  return (
            <Routes>
                <Route exact={true} path='/' element={ <SideBar /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/dashboard' element={ <SideBar /> } />
                <Route path='/nav' element={ <Nav /> } />
            </Routes>
  );
}

export default App;
