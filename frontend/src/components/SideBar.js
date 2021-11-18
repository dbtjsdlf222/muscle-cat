import React, {useState} from "react";
import styles from "../css/SideBar.module.css"
import { FaDesktop, FaListAlt, FaAlignJustify, FaUserCog, FaHouseUser, FaLaptop,
     FaChevronDown, FaChevronUp} from "react-icons/fa"
import logo from "../logo_white.png"
import {Link} from "react-router-dom";
import SideBarItem from "./SideBarItem";
import SideBarItemFold from "./SideBarItemFold";

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
                        <SideBarItem url="/dashboard" icon={<FaDesktop size="25" color="white" />} text="대시보드" isActive={active}/>
                        <SideBarItem url="/member" icon={<FaUserCog size="25" color="white" />} text="회원관리" isActive={active}/>
                        <SideBarItemFold url="/board" icon={<FaListAlt size="25" color="white" />} text="게시글" subItem={{"subpage":[{"pageLink":"/test","pageText": "공지사항"},{"pageLink":"/test2","pageText": "건의사항"}]}}/>
                        <SideBarItem url="/homepage" icon={<FaHouseUser size="25" color="white" />} text="홈페이지관리" isActive={active}/>
                        <SideBarItem url="/pos" icon={<FaLaptop size="25" color="white" />} text="포스이동" />
                    </ul>
            </div>
        </div>
    );
}

export default SideBar