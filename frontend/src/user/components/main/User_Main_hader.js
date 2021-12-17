import styles from "../../css/User_Main_hader.module.css";
import {Link} from "react-router-dom";
import logo from "../../../logo_white.png";

export default function User_Main_hader() {
    return (
        <div className={styles.hader}>
            <div className={styles.logobox}>
                <a href={'/'} className={styles.logolink}><img src={logo} className={styles.logo}/></a>
            </div>
                <ul className={styles.menulist}>
                    <li><a>머슬캣</a>
                        <ul className={styles.menu}>
                            <li><a>센터소개</a></li>
                            <li><a>트레이너소개</a></li>
                            <li><a>지점찾기</a></li>
                        </ul>
                    </li>
                    <li><a>회원공간</a>
                        <ul className={styles.menu}>
                            <li><a href={'attendance'}>출석현황</a></li>
                            <li><a>pt신청</a></li>
                            <li><a>주센터 입장현황</a></li>
                        </ul>
                    </li>

                    <li><a>게시판</a>
                        <ul className={styles.menu}>
                            <li><a>공지사항</a></li>
                            <li><a>자유게시판</a></li>
                            <li><a>진행중인이벤트</a></li>
                            <li><a>건의사항</a></li>
                        </ul>
                    </li>
                    <li><a>운동꿀팁</a>
                        <ul className={styles.menu}>
                            <li><a>웨이트</a></li>
                            <li><a>식단</a></li>
                            <li><a>스트레칭</a></li>
                        </ul>
                    </li>
                <div className={styles.login}>
                    <Link to={'/user_login'}>
                        <button>로그인</button>
                    </Link>
                </div>
                </ul>

        </div>


    )
}