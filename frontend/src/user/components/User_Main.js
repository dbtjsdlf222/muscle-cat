import {Link} from "react-router-dom";
import logo from "../../logo_white.png"
import styles from "../css/User_Main.module.css";


export default function User_Main(){

    return(
        <div >
            <div className={styles.hader}>
                <ul>
                    <div className={styles.logo_btn}>
                        <Link to={'/'}><img src={ logo } className={ styles.logo }/></Link>
                    </div>
                    <li>
                        <a>메뉴2</a>
                    </li>
                    <li>
                        <a>메뉴3</a>
                    </li>
                    <li>
                        <a>메뉴4</a>
                    </li>
                    <li>
                        <a>메뉴5</a>
                    </li>
                </ul>

            </div>
        </div>
    );

}