import styles from '../css/SingUp.module.css';
import {Link} from "react-router-dom";
import logo from "../../logo_white.png"
import action from "../apis/action";

function Singup() {
    return (
        <div className={styles.frame}>

            <div className={styles.signup}>
                <div className={logo}>
                    <Link to={'/'}><img src={logo} className={styles.logo}/></Link>
                </div>
                <form action="/" method="post" name="form" id="form">
                    <div className={styles.profile}>
                        <ul>
                            <li id="index"><p>이름</p></li>
                            <li>
                                <div>
                                    <input type="text" name="userName" id="userName" placeholder="이름을 입력하세요"/>
                                </div>
                            </li>
                            <li id="index"><p>아이디</p></li>
                            <li>
                                <div>
                                    <input type="text" name="userID" id="userID" placeholder="아이디를 입력하세요" minLength="6"
                                           maxLength="16" onBlur={(e)=>action(e.target.value)}/>

                                </div>
                            </li>

                            <li className={styles.input_error}>아이디는 6~15자 영문, 숫자
                                로만 입력가능합니다.
                            </li>


                            <li id="index">
                                <p>비밀번호</p>
                            </li>
                            <li>
                                <div>
                                <input type="password" name="userPW" className="pw" id="userPW"
                                       placeholder="비밀번호를 입력하세요"
                                       minLength="6" maxLength="16"/>
                                </div>
                            </li>

                            <li className={styles.input_error} aria-live={"assertive"}>6~16자 영문(소문자), 숫자, 특수문자
                                입력가능합니다.
                            </li>

                            <li id="index">
                                <p>비밀번호 확인</p>
                            </li>
                            <li>
                                <div>
                                <input type="password" name="pwCheck" className="pw" id="pwCheck" minLength="6"
                                       maxLength="16"/>
                                </div>
                            </li>
                            <li className={styles.input_error}>비밀번호가
                                일치하지 않습니다.
                            </li>


                            <li id="index">
                                <p>이메일</p>
                            </li>
                            <li>
                                <div>
                                <input type="text" name="email" id="email"/>
                                </div>
                            </li>
                            <li id="index" id="address">
                                <p>주센터</p>
                            </li>
                            <li>
                                <div>
                                <input type="text" id="zipNo" name="zipNo"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.button_send}>
                        <button className={styles.button_size} id="submit1" type="button" onClick="check();">가입하기
                        </button>
                        <button className={styles.button_size} id="reset" type="reset">다시쓰기</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Singup;
