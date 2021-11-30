import Styles from '../css/PosMain.module.css'
import {useState} from 'react';
import Mini from '../minion.png'



function Posmain(){
    var [membership,tetete] = useState('')
    function add(a){
        tetete(membership+a);
            }
    return(
        <div className={Styles.frame}>
            <div className={Styles.advertisement}>
                <img src={Mini}/>
            </div>
            <div className={Styles.number}>
                <table>
                    <tbody>
                    <tr>
                        <td onClick={()=>add(1)}>1</td>
                        <td onClick={()=>add(2)}>2</td>
                        <td onClick={()=>add(3)}>3</td>
                    </tr>
                    <tr>
                        <td onClick={()=>add(4)}>4</td>
                        <td onClick={()=>add(5)}>5</td>
                        <td onClick={()=>add(6)}>6</td>
                    </tr>
                    <tr>
                        <td onClick={()=>add(7)}>7</td>
                        <td onClick={()=>add(8)}>8</td>
                        <td onClick={()=>add(9)}>9</td>
                    </tr>
                    <tr>
                        <td>확인</td>
                        <td onClick={()=>add(0)}>0</td>
                        <td onClick={()=>tetete('')}>취소</td>
                    </tr>
                    <tr>
                        <td colSpan={3}><input type='submit' value={membership}/></td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );

}
export default Posmain;