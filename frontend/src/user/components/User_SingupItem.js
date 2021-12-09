import styles from "../css/User_SingUp.module.css";
import {action} from "../apis/action";
export default function User_SingupIteam(props){
    return(
      <div>
          <li><p>{props.List_name}</p></li>
          <li>
              <div className={styles.inputbox}>
                  <input type="text" minLength="6" maxLength="16"
                         placeholder={props.List_name+"을 입력하세요"}
                         onBlur={props.test}/>
              </div>
          </li>

      </div>
    );
}