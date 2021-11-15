import Login from './Login';
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Nav from "./Nav";



function App() {
  return (
      <div>
            <Routes>
                <Route exact={true} path='/' element={ <Nav /> } />
                <Route path='/test' element={ <Login /> } />
            </Routes>
      </div>

  );
}

export default App;
