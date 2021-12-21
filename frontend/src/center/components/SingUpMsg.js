import styles from "../css/SingUp.module.css";
import React from "react";

const SingUpMsg = (props) => {
    return(
        <>
            <div className={ styles.msg_box }>
                <span className={ props.className }>{ props.msg }</span>
            </div>
        </>
    );
}

export default SingUpMsg;