import React, {useState} from "react";
import styles from "../css/SideBar.module.css"
import { FaDesktop, FaListAlt, FaAlignJustify, FaUserCog, FaHouseUser, FaLaptop,
     FaChevronDown, FaChevronUp} from "react-icons/fa"
import logo from "../logo_white.png"
import {Link} from "react-router-dom";
import SideBarItem from "./SideBarItem";
import SideBarItemFold from "./SideBarItemFold";

const SideBar = (props) => {
    const [active, setActive] = useState(false);
    console.log(props.url)

    function changeActive() {
        setActive(!active);
    }

    return(
        <div className={ styles.wrap }>
            <div className={ styles.menu_bar + " " +(active ? styles.active : styles.notActive  )}>
                    <ul>
                        <li>
                            <Link to={'/'}><img src={ logo } className={ styles.logo }/></Link>
                            <i className={ styles.icon_tab } onClick={ changeActive }>
                                <FaAlignJustify size="25" color="white" />
                            </i>
                        </li>
                        <SideBarItem url="/dashboard" icon={<FaDesktop size="25" color="white" />} text="대시보드" isActive={ props.url === "dashboard" ? true : false }/>
                        <SideBarItem url="/member" icon={<FaUserCog size="25" color="white" />} text="회원관리" isActive={ props.url === "member" ? true : false }/>
                        <SideBarItemFold url="/board" icon={<FaListAlt size="25" color="white" />} text="게시글" subItem={{"subpage":[{"pageLink":"/test","pageText": "공지사항"},{"pageLink":"/test2","pageText": "건의사항"}]}}/>
                        <SideBarItem url="/homepage" icon={<FaHouseUser size="25" color="white" />} text="홈페이지관리" isActive={ props.url === "homepage" ? true : false }/>
                        <SideBarItem url="/pos" icon={<FaLaptop size="25" color="white" />} text="포스이동" />
                    </ul>
            </div>
        </div>
    );
}

export default SideBar