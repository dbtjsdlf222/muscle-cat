import styles from "../css/Dashboard.module.css";

const DashboardItem = (props) => {
    return(
        <li className={styles.status_item}>
            <div className={ styles.item_title}>
                <span>{ props.title }</span>
            </div>
            <div className={ styles.item_content }>
                <span>{ props.content_main }</span>
                <span> { props.content_sub }</span>
            </div>
        </li>
    );
}

export default DashboardItem