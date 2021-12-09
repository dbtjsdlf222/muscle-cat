import styles from '../css/Singup.module.css';
import {Link} from "react-router-dom";
import logo from "../../logo.png"
import action from "../apis/action.js";
import React from "react";
import SingupInput from "./SingupInput";

const Singup = () => {
    return (
        <div className={ styles.warp }>
            <div className={ styles.header }>
                <div className={ styles.logo_box }>
                    <Link to={'/'}><img src={ logo } className={ styles.main_logo } alt="logo" /></Link>
                </div>
            </div>
            <div className={ styles.singup_box }>
                <div className={ styles.singup_wrap }>
                    <div>
                        <div className={ styles.input_wrap }>
                            <form action="/" method="post" name="form" id="form">
                                <SingupInput id="center_name" title="센터명" ex="머슬캣헬스"/>
                                <div className={ styles.error_box }>
                                    <span>에러 메시지 입니다.</span>
                                </div>
                                <SingupInput id="franchise_name" title="지점명" ex="홍대입구역점"/>
                                <SingupInput id="businessNumber" title="사업자번호" ex="101"/>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Singup;
