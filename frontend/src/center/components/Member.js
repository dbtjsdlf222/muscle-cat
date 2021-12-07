import styles from "../css/Member.module.css"
import SideBar from "./SideBar";
import { FaSearch, FaUserPlus } from "react-icons/fa"
import dummy from "../../db/data.json";


const Member = (props) => {
    return(
        <>
            <SideBar url={props.url}/>
            <div className={ styles.main_wrap }>
                <div className={ styles.main_title }>
                    <span>회원관리</span>
                </div>
                <hr />
                <div className={ styles.btn_box }>
                    <button> <FaUserPlus size="20"/> <span>회원추가</span></button>
                </div>
                <div className={ styles.select_box }>
                    <div className={ styles.is_width250 }>
                        <select>
                            <option>이름</option>
                            <option>회원번호</option>
                            <option>전화번호</option>
                        </select>
                    </div>
                    <div className={ styles.is_width300 }>
                        <input type="text" />
                    </div>
                    <FaSearch size="28" color="white" />
                </div>

                <div className={ styles.status_item_list }>
                    <table>
                        <colgroup>
                            <col style={{width:"7%"}}/>
                            <col style={{width:"5%"}}/>
                            <col style={{width:"18%"}}/>
                            <col style={{width:"20%"}}/>
                            <col style={{width:"20%"}}/>
                            <col style={{width:"10%"}}/>
                            <col style={{width:"20%"}}/>
                        </colgroup>
                        <thead>
                            <th>번호</th>
                            <th>성별</th>
                            <th>회원번호</th>
                            <th>전화번호</th>
                            <th>이름</th>
                            <th>락커사용</th>
                            <th>관리</th>
                        </thead>
                        <tbody>
                                {dummy.member.map(dmber => (
                            <tr>
                                    <td>{dmber.num}</td>
                                    <td>{dmber.sex}</td>
                                    <td>{dmber.id}</td>
                                    <td>{dmber.pon}</td>
                                    <td>{dmber.name}</td>
                                    <td>{dmber.true}</td>
                                <td>
                                    <button>수정</button>
                                    <button>삭제</button>
                                </td>
                            </tr>
                                ))}

                        </tbody>
                    </table>



                </div>


            </div>
        </>
    );
}

export default Member;