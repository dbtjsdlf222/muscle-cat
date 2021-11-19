import styles from "../css/Dashboard.module.css";
import React from "react";

const DashboardListItem = (props) => {

    return(
        <div className={ styles.status_item_box}>
            <div className={ styles.status_title }>
                <span>{ props.title }</span>
            </div>
            <ul>
                <li className={styles.status_item_list}>
                    <table>
                        <colgroup>
                            <col style={{width:"30%"}}/>
                            <col style={{width:"50%"}}/>
                            <col style={{width:"20%"}}/>
                        </colgroup>
                        <thead>
                        <th>시간</th>
                        <th>성명</th>
                        <th>상태</th>
                        </thead>
                        <tbody>
                        <tr>
                            <td>06:00</td>
                            <td>김재범</td>
                            <td>퇴실</td>
                        </tr>
                        <tr>
                            <td>07:00</td>
                            <td>이현호</td>
                            <td>입실</td>
                        </tr>
                        <tr>
                            <td>08:00</td>
                            <td>유선일</td>
                            <td>입실</td>
                        </tr>
                        <tr>
                            <td>09:00</td>
                            <td>이재범</td>
                            <td>입실</td>
                        </tr>
                        <tr>
                            <td>10:00</td>
                            <td>삼재범</td>
                            <td>입실</td>
                        </tr><tr>
                            <td>11:00</td>
                            <td>사재범</td>
                            <td>입실</td>
                        </tr><tr>
                            <td>12:00</td>
                            <td>오재범</td>
                            <td>입실</td>
                        </tr>
                        <tr>
                            <td>13:00</td>
                            <td>육재범</td>
                            <td>입실</td>
                        </tr><tr>
                            <td>14:00</td>
                            <td>칠재범</td>
                            <td>입실</td>
                        </tr>
                        <tr>
                            <td>15:00</td>
                            <td>팔재범</td>
                            <td>입실</td>
                        </tr>
                        <tr>
                            <td>16:00</td>
                            <td>구재범</td>
                            <td>입실</td>
                        </tr><tr>
                            <td>17:00</td>
                            <td>십재범</td>
                            <td>입실</td>
                        </tr><tr>
                            <td>18:00</td>
                            <td>십일재범</td>
                            <td>입실</td>
                        </tr>
                        <tr>
                            <td>19:00</td>
                            <td>십이재범</td>
                            <td>입실</td>
                        </tr><tr>
                            <td>20:00</td>
                            <td>십삼재범</td>
                            <td>입실</td>
                        </tr>
                        </tbody>
                    </table>
                </li>
            </ul>
        </div>
    );
}

export default DashboardListItem;