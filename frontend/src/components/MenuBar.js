import "../css/MenuBar.css";
import logo from '../logo_white.png';
import {Link} from "react-router-dom";


const MenuBar = () => {
    return(
        <div className="header">
            <div className="menu_box">
                <img className="logo" src={ logo } />
                <div className="menu">
                    <ul className="menu_ul">
                        <li>
                            <Link to="/nav" >대시보드 </Link>
                        </li>
                        <li>
                            <Link to="/nav" >회원관리</Link>
                        </li>
                        <li>
                            게시글
                            <ul className="menu_side">
                                <li>공지사항</li>
                                <li>건의사항</li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/nav" >홈페이지관리</Link>
                        </li>
                        <li>
                            <Link to="/nav" >포스이동</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default MenuBar;