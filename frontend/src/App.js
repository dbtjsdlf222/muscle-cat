import Login from './center/components/Login';
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Dashboard from "./center/components/Dashboard";
import Member from "./center/components/Member";
import Singup from "./center/components/Singup";
import Pos  from "./center/components/PosMain";
import PT from "./center/components/PT";



function App() {
  return (
            <Routes>
                <Route exact={true} path='/' element={ <Login /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/dashboard' element={ <Dashboard url="dashboard"/> } />
                <Route path='/member' element={ <Member url="member"/> } />
                <Route path='/pt' element={ <PT url="pt"/> } />
                <Route path='/singup' element={ <Singup url="singup"/> } />
                <Route path='/pos' element={ <Pos url="pos"/> } />
            </Routes>
  );
}

export default App;
