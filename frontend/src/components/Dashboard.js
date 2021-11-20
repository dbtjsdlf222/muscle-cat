import React from "react";
import SideBar from "./SideBar";
import styles from "../css/Dashboard.module.css"
import DashboardItem from "./DashboardItem";
import DashboardListItem from "./DashboardListItem";

const Dashboard = (props) => {
    return(
        <>
            <SideBar url={props.url}/>
            <div className={ styles.main_wrap }>
                <div className={ styles.main_title }>
                    <span>대시보드</span>
                </div>
                <hr />
                <div className={ styles.status}>
                    <div className={ styles.status_title }>
                        <span>총괄 현황</span>
                    </div>
                    <ul>
                        <DashboardItem title="회원 수" content_main="100" content_sub="명" />
                        <DashboardItem title="락커 수" content_main="100/100" content_sub="개" />
                    </ul>
                </div>
                <div className={ styles.status}>
                    <div className={ styles.status_title }>
                        <span>당일 현황</span>
                    </div>
                    <ul>
                        <DashboardItem title="방문 수" content_main="55" content_sub="명" />
                        <DashboardItem title="PT" content_main="30" content_sub="명" />
                        <DashboardItem title="테스트" content_main="10" content_sub="개" />

                    </ul>
                </div>
                <div className={ styles.status_list }>
                    <DashboardListItem title="방문자" />
                    <DashboardListItem title="PT" />
                </div>

                <br />
                <br />
                <br />
                <br />
            </div>
        </>
    );
}

export default Dashboard