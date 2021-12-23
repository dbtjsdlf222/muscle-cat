import SideBar from "./SideBar";
import styles from "../css/PT.module.css";
import React, {useState} from "react";
import moment from 'moment';
import {FaCaretLeft, FaCaretRight, FaTimes, FaUserPlus} from "react-icons/fa"
import PTMemberAddModal from "./PTMemberAddModal";

const PT = (props) => {
    const [getMoment, setMoment] = useState(moment);
    const today = getMoment;
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 :today.clone().endOf('month').week();

    const [modalOpen, setModalOpen] = useState(false)
    const modalClose = () => {
        setModalOpen(!modalOpen)
    }


    const calendarArr=()=>{
        let result = [
            <div className={ styles.calendar_week }>
                <div>일</div>
                <div>월</div>
                <div>화</div>
                <div>수</div>
                <div>목</div>
                <div>금</div>
                <div>토</div>
            </div>
        ];
        let week = firstWeek;
        
        for ( week; week <= lastWeek; week++) {
            result = result.concat(
                <div className={ styles.calendar_day }>
                    {
                        Array(7).fill(0).map((data, index) => {
                            let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
                            if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                                return(
                                    <div key={index}  >
                                        <span className={ styles.today }>{days.format('D')}</span>
                                    </div>
                                );
                            }else if(today.format('YYYYMM') === days.format('YYYYMM')){
                                return(
                                    <div key={index}  >
                                        <span>{days.format('D')}</span>
                                    </div>
                                );
                            }else {
                                return(
                                    <div>
                                        <span></span>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
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
                    <button className={ styles.add_button } onClick={modalClose}> <FaUserPlus size="20"/> <span>PT 등록</span></button>
                </div>
                <div className={ styles.calendar_btn_box }>
                    <button className={ styles.btn } onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} >
                        <FaCaretLeft size="30" />
                    </button>
                    <span>{today.format('YYYY 년 MM 월')}</span>
                    <button className={ styles.btn } onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }}>
                        <FaCaretRight size="30" />
                    </button>
                </div>
                <div className={ styles.calendar_wrap }>
                    {calendarArr()}
                </div>
                { modalOpen && <PTMemberAddModal modalClose={modalClose}></PTMemberAddModal>}
            </div>


        </>
    );
}

export default PT;