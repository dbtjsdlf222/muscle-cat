import {Link} from "react-router-dom";
import styles from "../css/SideBar.module.css";
import React, {useState} from "react";

const SideBarItem = (props) => {

    return(
        <li>
            <Link to={props.url} className={ styles.item} >
                <i className={ styles.icon_menu }>
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