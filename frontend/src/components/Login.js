import React, { useState, useEffect} from 'react';
import styles from '../css/Login.module.css';
import logo from '../logo.png';
import LoginAxios from "../apis/LoginAxios";
import {Link} from "react-router-dom";


const Login= () => {
   
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");

    function submit() {
        LoginAxios(userId,userPw);
    }


    return(
        <div className={ styles.warp }>
            <div className={ styles.header }>
                <div className={ styles.logo_box }>
                    <Link to={'/'}><img src={ logo } className={ styles.main_logo } alt="logo" /></Link>
                </div>
            </div>
            <div>
                <div className={ styles.login_box }>
                    <div className={ styles.login_wrap }>
                        <div className={styles.login_text_box }>
                            <span className={ styles.login_box }>로그인</span>
                        </div>
                        <div>
                            <div className={ styles.input_wrap }>
                                <div className={ styles.input_box }>
                                    <div className={ styles.icon_box }>
                                        <span className={ styles.icon_id }></span>
                                    </div>
                                    <input className={ styles.input_text } type="text" placeholder="아이디"
                                        onChange= { (e) => { setUserId(e.target.value) } }
                                        onFocus= { (e) => { e.target.parentElement.style.border="2.5px solid black" } }
                                        onBlur= { (e) => { e.target.parentElement.style.border="1px solid black" } }
                                    />
                                </div>
                                <div className={ styles.input_box }>
                                    <div className={ styles.icon_box }>
                                        <span className={ styles.icon_pw }></span>
                                    </div>
                                    <input className={ styles.input_text } type="password" placeholder="비밀번호"
                                        onChange={(e) => { setUserPw(e.target.value) } }
                                        onFocus= { (e) => { e.target.parentElement.style.border="2.5px solid black" } }
                                        onBlur= { (e) => { e.target.parentElement.style.border="1px solid black" } }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="login_btn_box">
                            <div className={ styles.btn_wrap }>
                                <button className={ styles.login_btn } onClick={ submit }>로그인</button>
                            </div>
                        </div>
                    </div>
                    <div className={ styles.link_box}>
                        <Link to="/test1">아이디 찾기
                        </Link>
                        <Link to="/test1">비밀번호 찾기
                        </Link>
                        <Link to="/singup">회원가입
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>

    );
};

export default Login;