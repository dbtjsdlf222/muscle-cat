import styles from "../css/User_Attendance.module.css"
import User_Main_hader from "./main/User_Main_hader";

export default function User_Attendance(){
return(
    <div className={styles.frame}>
       <User_Main_hader/>
        <div className={styles.progress}>
            <progress max={100} value={80}></progress>
            <svg className={styles.circlebox} version="1.1" baseProfile="full">
                <circle className={styles.circle} cx="150" cy="100" r="80" />
                <text x="150" y="125" font-size="60" text-anchor="middle"></text>
                {/*<div className="progress" style={'width:30%'}></div>*/}
            </svg>
        </div>

    </div>

);
}