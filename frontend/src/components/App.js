import Login from './Login';
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Nav from "./Nav";
import MenuBar from "./MenuBar";



function App() {
  return (
      <div>
            <Routes>
                <Route exact={true} path='/' element={ <Nav /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/dashboard' element={ <MenuBar /> } />
                <Route path='/nav' element={ <Nav /> } />
            </Routes>
      </div>

  );
}

export default App;
