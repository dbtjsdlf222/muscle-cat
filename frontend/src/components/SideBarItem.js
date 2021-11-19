import {Link} from "react-router-dom";
import styles from "../css/SideBar.module.css";
import React, {useState} from "react";

const SideBarItem = (props) => {

    return(
        <li className={props.isActive ? "itemActive" : ''}>
            <Link to={props.url} className={ styles.item + " " +(props.isActive ? styles.itemActive : ''  ) } >
                <i className={ styles.icon_menu}>
                    {props.icon}
                </i>
                <span>
                    {props.text}
                </span>
            </Link>
        </li>
    );
}

export default SideBarItem