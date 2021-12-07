import React, {useState} from "react";
import styles from "../css/SideBar.module.css";
import {Link} from "react-router-dom";

const SideBarItemFoldItem = (props) => {
    return(
        <ul className={ styles.subItem}>
            {props.subItem.subpage.map( sub =>
                <li>
                    <Link to={sub.pageLink}>
                        <span>{sub.pageText}</span>
                    </Link>
                </li>
            )}
        </ul>
    );
}

export default SideBarItemFoldItem