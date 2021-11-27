import Styles from '../css/PosMain.module.css'
import Mini from '../minion.png'



function Posmain(){
    return(
        <div className={Styles.frame}>
            <div className={Styles.advertisement}>
                <img src={Mini}/>
            </div>
            <div className={Styles.number}>
                <table>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>확인</td>
                        <td>0</td>
                        <td>취소</td>
                    </tr>
                    <tr>
                        <td colSpan={3}><input type='text'/></td>
                    </tr>
                </table>

            </div>
        </div>
    );

}
export default Posmain;