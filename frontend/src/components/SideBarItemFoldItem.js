import React, {useState} from "react";
import styles from "../css/SideBar.module.css";
import {Link} from "react-router-dom";

const SideBarItemFoldItem = (props) => {
    return(
        <ul className={ styles.subItem}>
            {props.subItem.subpage.map( n =>
                <li>
                    <Link to={n.pageLink}>
                        <span>{n.pageText}</span>
                    </Link>
                </li>
            )}
        </ul>
    );
}

export default SideBarItemFoldItem