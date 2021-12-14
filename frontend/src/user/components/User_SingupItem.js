import styles from "../css/User_SingUp.module.css";
import {action} from "../apis/action";
export default function User_SingupIteam(props){
    return(
      <div className={styles.user_singupiteam}>
          <p>{props.title}</p>
          <li>
              <div className={styles.inputbox}>
                  <input type="text"
                         minLength={props.minLength} maxLength={props.maxLength}
                         placeholder={props.placeholder}
                         onBlur={props.action}/>
              </div>
          </li>
      </div>
    );
}