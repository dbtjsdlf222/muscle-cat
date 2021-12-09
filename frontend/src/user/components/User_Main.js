import {Link} from "react-router-dom";
import logo from "../../logo_white.png"
import styles from "../css/User_Main.module.css";
import cat from "../../cat.jpeg";
import cat2 from "../../cat2.jpeg";
import {Attendance} from "../apis/action";

export default function User_Main() {

    return (
        <div className={styles.frame}>
            <div className={styles.hader}>
                <ul>
                    <div className={styles.logo_btn}>
                        <Link to={'/'}><img src={logo} className={styles.logo}/></Link>
                    </div>
                    <div className={styles.menu}>
                        <li>
                            <a>머슬캣</a>
                            <ul>
                                <a>
                                    <li>센터소개</li>
                                </a>
                                <a>
                                    <li>트레이너소개</li>
                                </a>
                                <a>
                                    <li>지점찾기</li>
                                </a>
                            </ul>
                        </li>
                        <li>
                            <a>회원공간</a>
                            <ul>
                                <a href={'attendance'}>
                                    <li>출석현황</li>
                                </a>
                                <a>
                                    <li>pt신청</li>
                                </a>
                                <a>
                                    <li>주센터 입장현황</li>
                                </a>
                            </ul>
                        </li>
                        <li>
                            <a>게시판</a>
                            <ul>
                                <a>
                                    <li>공지사항</li>
                                </a>
                                <a>
                                    <li>자유게시판</li>
                                </a>
                                <a>
                                    <li>진행중인 이벤트</li>
                                </a>
                                <a>
                                    <li>건의사항</li>
                                </a>

                            </ul>
                        </li>
                        <li>
                            <a>운동꿀팁</a>
                            <ul>
                                <a>
                                    <li>웨이트</li>
                                </a>
                                <a>
                                    <li>식단</li>
                                </a>
                                <a>
                                    <li>스트레칭</li>
                                </a>
                            </ul>
                        </li>

                        <div className={styles.login}>
                            <Link to={'/user_login'}>
                                <button>로그인</button>
                            </Link>
                        </div>
                    </div>
                </ul>
            </div>
            <div className={styles.body}>
                <a target={"_blank"} href={"https://papago.naver.com"}><img src={cat}/></a>
                <a href={"https://translate.google.com/"} target={"_blank"}><img src={cat2}/></a>
            </div>
        </div>
    );

}