import React, {useState} from "react";
import styles from "../css/SideBar.module.css"
import { FaDesktop, FaListAlt, FaAlignJustify, FaUserCog, FaHouseUser, FaLaptop} from "react-icons/fa"
import logo from "../logo_white.png"
import {Link} from "react-router-dom";

const SideBar = () => {
    const [active, setActive] = useState(false);

    function changeActive() {
        setActive(active ? false : true);
    }

    return(
        <div className={ styles.wrap }>
            <div className={ styles.menu_bar + " " +(active ? styles.active : ''  )}>
                    <ul>
                        <li>
                            <img src={ logo } className={ styles.logo } />
                            <i className={ styles.icon_tab } onClick={ changeActive }>
                                <FaAlignJustify size="25" color="white" />
                            </i>
                        </li>
                        <li>
                            <Link to="/nav" >
                                <i className={ styles.icon_menu }>
                                    <FaDesktop size="25" color="white" />
                                </i>
                                <span>대시보드</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/nav" >
                                <i className={ styles.icon_menu }>
                                    <FaUserCog size="25" color="white" />
                                </i>
                                <span>
                                    회원관리
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/nav" >
                                <i className={ styles.icon_menu }>
                                    <FaListAlt size="25" color="white" />
                                </i>
                                <span>
                                    게시글
                            </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/nav" >
                                <i className={ styles.icon_menu }>
                                    <FaHouseUser size="25" color="white" />
                                </i>
                                <span>
                                    홈페이지관리
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/nav" >
                                <i className={ styles.icon_menu }>
                                    <FaLaptop size="25" color="white" />
                                </i>
                                <span>
                                    포스이동
                                </span>
                            </Link>
                        </li>

                    </ul>
            </div>
        </div>
    );
}

export default SideBar