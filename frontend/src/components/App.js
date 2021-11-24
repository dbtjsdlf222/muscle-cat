import Login from './Login';
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Dashboard from "./Dashboard";
import Member from "./Member";
import Singup from "./Singup";



function App() {
  return (
            <Routes>
                <Route exact={true} path='/' element={ <Login /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/dashboard' element={ <Dashboard url="dashboard"/> } />
                <Route path='/member' element={ <Member url="member"/> } />
                <Route path='/singup' element={ <Singup url="singup"/> } />
            </Routes>
  );
}

export default App;
