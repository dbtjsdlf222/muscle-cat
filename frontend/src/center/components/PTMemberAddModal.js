import React, {useState} from 'react'
import styles from '../css/PTMemberAddModal.module.css';
import {FaTimes} from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";

const PTMemberAddModal = ({modalClose}) => {

    const [startDate, setStartDate] = useState(new Date());

    const onCloseModal = (e) => {
        console.log('e.target: ', e.target)
        console.log('e.tarcurrentTargetget: ', e.currentTarget)
        if(e.target === e.currentTarget){
            modalClose()
        }

    }
    return (
        <div className={ styles.modal_container }>
            <div className={ styles.modal_warp }>
                <div className={ styles.modal_header }>
                    <div className={ styles.main_title }>
                        <span>PT 등록</span>
                    </div>
                    <button className={ styles.modal_button } onClick={modalClose}> <FaTimes size="40" /></button>
                    <hr />
                </div>
                <div className={ styles.modal_body}>
                    <div>
                        <table>
                            <colgroup>
                                <col width="15%"/>
                                <col width="*" />
                            </colgroup>
                            <tbody>
                            <th>
                                <td>회원번호</td>
                                <td>
                                    <input type="text" className={ styles.inputText } />
                                    <button className={ styles.find_button }>검색</button>
                                </td>
                            </th>
                            <th>
                                <td>이름</td>
                                <td>
                                    <input type="text" className={ styles.inputText } />
                                </td>
                            </th>
                            <th>
                                <td>트레이너</td>
                                <td>
                                    <input type="text" className={ styles.inputText } />
                                    <button className={ styles.find_button }>검색</button>
                                </td>
                            </th>
                            <th>
                                <td>시간</td>
                                <td>
                                    <input type="datetime-local" className={ styles.inputDate } />
                                </td>
                            </th>
                            <div className={ styles.button_box }>
                                <button type="button" className={ styles.save_button }>등록</button>
                            </div>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PTMemberAddModal
