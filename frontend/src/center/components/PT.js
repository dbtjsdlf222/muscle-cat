import SideBar from "./SideBar";
import styles from "../css/PT.module.css";
import React, {useState} from "react";
import moment from 'moment';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa"

const PT = (props) => {
    const [getMoment, setMoment] = useState(moment);
    const today = getMoment;
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 :today.clone().endOf('month').week();

    const calendarArr=()=>{
        let result = [];
        let week = firstWeek;
        for ( week; week <= lastWeek; week++) {
            result = result.concat(
                <tr key={week}>
                    {
                        Array(7).fill(0).map((data, index) => {
                            let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

                            if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                                return(
                                    <td key={index} style={{backgroundColor:'red'}} >
                                        <span>{days.format('D')}</span>
                                    </td>
                                );
                            }else if(days.format('MM') !== today.format('MM')){
                                return(
                                    <td key={index} style={{backgroundColor:'gray'}} >
                                        <span>{days.format('D')}</span>
                                    </td>
                                );
                            }else{
                                return(
                                    <td key={index}  >
                                        <span>{days.format('D')}</span>
                                    </td>
                                );
                            }
                        })
                    }
                </tr>
            );
        }
        return result;
    }


    return(
        <>
            <SideBar url={props.url} />
            <div className={ styles.main_wrap }>
                <div className={ styles.main_title }>
                    <span>PT 관리</span>
                </div>
                <hr />
                <div className={ styles.btn_box }>
                    <button className={ styles.btn } onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} >
                        <FaCaretLeft size="30" />
                    </button>
                    <span>{today.format('YYYY 년 MM 월')}</span>
                    <button className={ styles.btn } onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }}>
                        <FaCaretRight size="30" />
                    </button>
                </div>
                <table>
                    <tbody>
                    {calendarArr()}
                    </tbody>
                </table>

            </div>
        </>
    );
}

export default PT;