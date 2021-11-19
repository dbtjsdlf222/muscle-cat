import styles from "../css/Member.module.css"
import SideBar from "./SideBar";

const Member = (props) => {
    return(
        <>
            <SideBar url={props.url}/>
            <div className={ styles.main_wrap }>
                <div className={ styles.main_title }>
                    <span>회원관리</span>
                </div>
                <hr />


            </div>
        </>
    );
}

export default Member;