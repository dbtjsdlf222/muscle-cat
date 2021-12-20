import styles from "../../css/User_Main.module.css";
import cat from "../../../cat.jpeg";
import cat2 from "../../../cat2.jpeg";
import {Attendance} from "../../apis/action";
import User_Main_hader from "./User_Main_hader";

export default function User_Main() {

    return (
        <div className={styles.frame}>
            <User_Main_hader/>
            <div className={styles.body}>
                <a target={"_blank"} href={"https://papago.naver.com"}><img src={cat}/></a>
                <a href={"https://translate.google.com/"} target={"_blank"}><img src={cat2}/></a>
            </div>
        </div>
    );

}