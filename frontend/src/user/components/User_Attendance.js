import styles from "../css/User_Attendance.module.css"
import User_Main_hader from "./main/User_Main_hader";
import {useState} from "react";
import db from "../db/Usrt_data.json"


export default function User_Attendance() {
    var term = 30;
    var day = 5;
    var attend=3;
    var period = 504 * (day / term);
    var a = [period, 504 - period];
    return (
        <div className={styles.frame}>
            <User_Main_hader/>
            <div className={styles.attendance}>
                <svg className={styles.circlebox} version="1.1" baseProfile="full">
                    <circle className={styles.circle}
                            cx="150" cy="100" r="80"
                        // stroke-dasharray='200,304px'
                            stroke-dasharray={a}
                    />
                    <text x="150" y="90" font-size="20" text-anchor="middle">총{term}일중</text>
                    <text x="150" y="125" font-size="30" text-anchor="middle">{day}일경과</text>
                </svg>
                <div className={styles.progress}>
                    출석률:<p>10%</p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{term}일중{attend}일출석
                <progress className={styles.bar} value={day} max={term}></progress>
                </div>
            </div>
            <div className={styles.boardbox}>
                <table className={styles.table}>
                    <colgroup>
                        <col style={{width: "25%"}}/>
                        <col style={{width: "25%"}}/>
                        <col style={{width: "25%"}}/>
                        <col style={{width: "25%"}}/>
                    </colgroup>
                    <tbody>
                    {db.attendance.map(dmber => (
                        <tr>
                            <td>{dmber.Point}</td>
                            <td>{dmber.day}</td>
                            <td>{dmber.time}</td>
                            <td>{dmber.Entrance}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>


            </div>
            <div></div>

        </div>

    );
}