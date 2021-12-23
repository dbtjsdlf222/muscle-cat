import styles from "../css/SingUp.module.css";
import React from "react";

const SingUpInput = (props) => {
    return(
        <>
            <div className={ styles.input_title }>
                <span>{ props.title }</span>
            </div>
            <div className={ styles.input_box }>
                <input id={ props.id } name={ props.name } className={ styles.input_text } type={ props.type } onClick={ props.onClick } value={ props.state} onChange={ props.onChange } onBlur= { props.onBlur } />
            </div>
        </>
    );
}

export default SingUpInput;