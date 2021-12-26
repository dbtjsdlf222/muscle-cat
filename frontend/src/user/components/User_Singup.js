import styles from '../css/User_SingUp.module.css';
import {Link} from "react-router-dom";
import logo from "../../logo_white.png"
import User_SingupIteam from "./User_SingupItem";
import {action} from "../apis/action";

function User_Singup() {
    return (
        <div className={styles.frame}>
            <div className={styles.signup}>
                <div className={styles.logobox}>
                    <Link to={'/'}>
                        <img src={logo} className={styles.logo}/>
                    </Link>
                </div>
                <form action="/" method="post" name="form" id="form">
                    <div className={styles.profile}>
                        <ul>
                            <User_SingupIteam title={'이름'} placeholder={'이름을 입력하세요'}/>
                            <User_SingupIteam title={'아이디'} action={(e) => action(e.target.value)} minLength={'6'} maxLength={'16'} placeholder={'아이디를 입력하세요'}/>
                            <p>아이디는 6~15자 영문, 숫자 로만 입력가능합니다.</p>
                            <User_SingupIteam title={'비밀번호'} placeholder={'비밀번호를 입력하세요'}/>
                            <p>6~16자 영문(소문자), 숫자, 특수문자 입력가능합니다.</p>
                            <User_SingupIteam title={'비밀번호확인'}/>
                            <p>비밀번호가 일치하지 않습니다.</p>
                            <User_SingupIteam title={'이메일'}/>
                            <User_SingupIteam title={'주센터'}/>
                            <User_SingupIteam title={'회원번호'}/>
                             <div className={styles.button_send}>
                                 <button className={styles.button_size} id="submit1" type="button" onClick="check();">가입하기</button>
                                 <button className={styles.button_size} id="reset" type="reset">다시쓰기</button>
                             </div>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default User_Singup;
