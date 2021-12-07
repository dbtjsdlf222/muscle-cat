import {Link} from "react-router-dom";
import Styles from "./center/css/PosMain.module.css";

export default function Main(){
    return(
    <div className={Styles.frame}>
        <div className={Styles.advertisement}>
            <button><Link to={'user_main'}>유저 페이지 연결</Link></button>
        </div>
        <div className={Styles.number}>
            <button><Link to={'login'}>센터 페이지 연결</Link></button>
        </div>
    </div>
    )

}