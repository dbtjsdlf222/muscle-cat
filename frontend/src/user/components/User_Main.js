import {Link} from "react-router-dom";
import logo from "../../logo_white.png"
import styles from "../css/User_Main.module.css";
import cat from "../../cat.jpeg";
import cat2 from "../../cat2.jpeg";


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
                            <li>센터소개</li>
                            <li>트레이너소개</li>
                            <li>지점찾기</li>
                        </ul>
                    </li>
                    <li>
                        <a>회원공간</a>
                        <ul>
                            <li>출석현황</li>
                            <li>pt신청</li>
                            <li>주센터 입장현황</li>
                        </ul>
                    </li>
                    <li>
                        <a>게시판</a>
                        <ul>
                            <li>공지사항</li>
                            <li>자유게시판</li>
                            <li>진행중인 이벤트</li>
                            <li>건의사항</li>
                        </ul>
                    </li>
                    <li>
                        <a>운동꿀팁</a>
                        <ul>
                            <li>웨이트</li>
                            <li>식단</li>
                            <li>스트레칭</li>
                        </ul>
                    </li>

                    <div className={styles.login}>
                        <a><button>로그인</button></a>
                    </div>
                    </div>
                </ul>
            </div>
            <div className={styles.body}>
                <a target={"_blank"} href={"https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%ED%8C%8C%ED%8C%8C%EA%B3%A0"}><img src={cat}/></a>
                <a href={"https://translate.google.com/"} target={"_blank"}><img src={cat2}/></a>
            </div>
        </div>
    );

}