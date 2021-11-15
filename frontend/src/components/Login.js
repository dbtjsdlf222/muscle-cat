import React, { useState, useEffect} from 'react';
import '../Login.css';
import logo from '../logo.png';
import LoginAxios from "../apis/LoginAxios";


const Login= () => {
   
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");

    function submit() {
        LoginAxios('/test',userId,userPw);
    }
    // 첫번째 렌더링을 다 마친 후 실행합니다.
    useEffect(
        () => {
            // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.

        }, []
    );

    return(
        <div id="wrap">
        <div className="header">
            <div className="logo-box">
            <img src={ logo } className="main-logo" alt="logo" />  
            </div>
        </div>
        <div>
            <div className="login-box">
            <div className="login-wrap">
                <div className="login-text-box">
                <span className="login-text">로그인</span>
                </div>
                <div className="id-pw-box">
                <div className="input-wrap">
                    <div className="input-box">
                    <div className="icon-box">
                        <span className="icon-id"></span>
                    </div>  
                    <input className="input-text" type="text" placeholder="아이디" 
                        onChange= { (e) => { setUserId(e.target.value) } }
                        onFocus= { (e) => { e.target.parentElement.style.border="2.5px solid black" } }
                        onBlur= { (e) => { e.target.parentElement.style.border="1px solid black" } } 
                        />
                    </div>
                    <div className="input-box">
                    <div className="icon-box">
                        <span className="icon-pw"></span>
                    </div>  
                    <input className="input-text" type="password" placeholder="비밀번호" 
                    onChange={(e) => { setUserPw(e.target.value) } }
                    onFocus= { (e) => { e.target.parentElement.style.border="2.5px solid black" } }
                    onBlur= { (e) => { e.target.parentElement.style.border="1px solid black" } } 
                    />
                    </div>        
                </div>
                </div>
                <div className="login_btn_box">
                <div className="btn-wrap">
                    <button className="login_btn" onClick={ submit }>로그인</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Login;