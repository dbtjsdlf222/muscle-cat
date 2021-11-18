import {Link} from "react-router-dom";
import styles from "../css/SideBar.module.css";
import React, {useState} from "react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import SideBarItemFoldItem from "./SideBarItemFoldItem";

const SideBarItemFold = (props) => {
    const [active, setActive] = useState(false);

    function changeActive() {
        setActive(active ? false : true);
    }

    return(
        <li onClick={ changeActive }>
            <div className={ styles.item + " " +(active ? styles.itemActive : ''  ) } >
                <i className={ styles.icon_menu }>
                    {props.icon}
                </i>
                <span>
                    {props.text}
                </span>
                <i className={ styles.icon_chevron}>
                    {active ? <FaChevronDown color="white"/> : <FaChevronUp color="white" /> }
                </i>
            </div>
                <SideBarItemFoldItem subItem={props.subItem}/>
        </li>
    );
}

export default SideBarItemFold