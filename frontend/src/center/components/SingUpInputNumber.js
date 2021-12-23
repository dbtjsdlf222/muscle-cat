import styles from "../css/SingUp.module.css";
import React from "react";

const SingUpInput = (props) => {
    return(
        <>
            <div className={ styles.input_title }>
                <span>{ props.title }</span>
            </div>
            <div className={ styles.input_box }>
                <input id={ props.id } name={ props.name } className={ styles.input_text } type="text" onChange={ props.onChange } onBlur= { props.onBlur } value={ props.state }/>
            </div>
        </>
    );
}

export default SingUpInput;