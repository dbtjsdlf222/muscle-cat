import Login from './center/components/Login';
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Dashboard from "./center/components/Dashboard";
import Member from "./center/components/Member";
import SingUp from "./center/components/SingUp";
import Pos  from "./center/components/PosMain";
import PT from "./center/components/PT";
import Main from "./Main";
import User_Main from "./user/components/main/User_Main";
import User_Login from "./user/components/User_Login";
import User_Attendance from "./user/components/User_Attendance"
import User_Singup from "./user/components/User_Singup";



function App() {
  return (
            <Routes>
                <Route exact={true} path='/' element={ <Main /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/dashboard' element={ <Dashboard url="dashboard"/> } />
                <Route path='/member' element={ <Member url="member"/> } />
                <Route path='/pt' element={ <PT url="pt"/> } />
                <Route path='/singUp' element={ <SingUp url="singUp"/> } />
                <Route path='/pos' element={ <Pos url="pos"/> } />

                {/*user*/}
                <Route path='/user_main' element={<User_Main/>} />
                <Route path='/user_login' element={ <User_Login /> } />
                <Route path='/user_singup' element={ <User_Singup/> } />
                <Route path='attendance' element={ <User_Attendance /> } />
            </Routes>
  );
}

export default App;
