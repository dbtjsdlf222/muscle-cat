import styles from '../css/SingUp.module.css';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import logo from "../../logo.png";
import React, {useEffect, useState} from "react";
import SingUpInput from "./SingUpInput";
import SingUpInputNumber from "./SingUpInputNumber";
import DaumPostcode from 'react-daum-postcode';
import SingUpMsg from "./SingUpMsg";
import {idAxios} from "../apis/SingUpAxios"
import axios from "axios";

const SingUp = () => {

    const navigate = useNavigate();

    //사업자번호
    const [businessNumber, setBusinessNumber] = useState("");
    //아이디
    const [id, setId] = useState("");
    //우편번호
    const [zoneCode, setZoneCode] = useState("");
    //주소
    const [address, setAddress] = useState("");
    //주소 검생창 열기/닫기
    const [isOpenPost, setIsOpenPost] = useState(false);
    //전화번호
    const [telephone, setTelephone] = useState("");

    //사업자번호 메세지
    const [businessNumberMsg, setBusinessNumberMsg] = useState("");
    //아이디 메세지
    const [idMsg, setIdMsg] = useState("");

    //아이디 onChange 이벤트
    const idOnChange = e => {
        setId(e.target.value);

        idAxios(e.target.value, setIdMsg);
    };

    //사업자번호 onChange 이벤트
    const businessNumberOnChange = e => {
        if(e.target.value.replaceAll("-","").length > 10){
            setBusinessNumberMsg("사업자번호는 10자를 넘을 수 없습니다.");
            return
        }else{
            setBusinessNumberMsg("");
        }
        setBusinessNumber(e.target.value.replace(/[^0-9](-)/g, ""));
    };

    //전화번호 onChange 이벤트
    const telephoneOnChange = e => {
        if(e.target.value.replace("-","").length > 12){
            alert("전화번호는 12자를 넘을 수 없습니다.");
            return
        }
        setTelephone(e.target.value.replace(/[^0-9](-)/g, ""));
    };

    //다음API 주소 가져오기 이벤트
    const onCompletePost = (data) => {
        let fullAddr = data.address;
        let extraAddr = '';

        if (data.addressType === 'R') {
            setZoneCode(data.zonecode);
            setAddress(data.address);
        }
        
        setIsOpenPost(false);
    };

    //주소 검색창 열기/닫기 이벤트
    const onChangeOpenPost = () => {
        setIsOpenPost(!isOpenPost);
    };

    //취소 버튼 이벤트
    const goBack = () => {
        navigate("/login");
    };

    //사업자번호 체크
    const businessNumberCheck = (e) => {
        if(e.target.value.replaceAll("-","").length == 10) {
            setBusinessNumberMsg("");
        }else if(e.target.value.replaceAll("-","").length < 10) {
            setBusinessNumberMsg("사업자번호가 맞지 않습니다.");
        }
    }
    
    //아이디 체크
    const idCheck = (e) => {
        idAxios(e.target.value, setIdMsg);

    }


    //사업자번호 useEffect 이벤트
    useEffect( () => {
        setBusinessNumber(businessNumber.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3'));
    },[businessNumber])

    //전화번호 useEffect 이벤트
    useEffect( () => {
        setTelephone(telephone.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3'));
    },[telephone])



    return (
        <div className={ styles.warp }>
            <div className={ styles.header }>
                <div className={ styles.logo_box }>
                    <Link to={'/'}><img src={ logo } className={ styles.main_logo } alt="logo" /></Link>
                </div>
            </div>
            <div className={ styles.singUp_box }>
                <div className={styles.input_wrap}>
                    <div>
                        <div className={ styles.input_wrap }>
                            <form action="/center/join" method="post" name="form" id="form">
                                { /* 센터명 */ }
                                <SingUpInput id="centerModel.name" name="centerModel.name" title="센터명"  type="text"/>
                                { /* 지점명 */ }
                                <SingUpInput id="franchiseModel.name" name="franchiseModel.name" title="지점명"  type="text" />
                                { /* 사업자번호 */ }
                                <SingUpInputNumber id="businessNumber" name="franchiseModel.businessNumber" title="사업자번호"  onChange={businessNumberOnChange} onBlur={ businessNumberCheck } state={businessNumber}/>
                                { /* 사업자번호 메세지 */ }
                                <SingUpMsg msg={ businessNumberMsg } />
                                { /* 아이디 */ }
                                <SingUpInput id="franchiseModel.id" name="franchiseModel.id" title="아이디" type="text"  onChange={ idOnChange } onBlur={ idCheck } state={ id }/>
                                { /* 아이디 메세지 */ }
                                <SingUpMsg msg={ idMsg } />
                                { /* 패스워드 */ }
                                <SingUpInput id="franchiseModel.pw" name="franchiseModel.pw" title="패스워드" type="password"/>
                                { /* 주소 */ }
                                <div className={ styles.input_title }>
                                    <span>주소</span>
                                </div>
                                <div className={ styles.post_code }>
                                    <div className={ styles.input_box20 }>
                                        <input id="zoneCode" name="franchiseModel.address" className={ styles.input_text } type="text" value={ zoneCode }/>
                                    </div>
                                    <button type="button" className={ styles.post_btn } onClick={ onChangeOpenPost } > 주소검색 </button>
                                </div>
                                <div className={ styles.input_box_post } >
                                    <input id="address" name="franchiseModel.address" className={ styles.input_text } type="text" value={ address } />
                                </div>
                                <div className={ styles.input_box_post }>
                                    <input id="addressDetail" name="franchiseModel.address" className={ styles.input_text } type="text" />
                                </div>
                                { /* 다음 주소검색 API */ }
                                {isOpenPost  ? (<DaumPostcode style={ { width:"100%", border: "1px solid black",zIndex: "100", marginTop: "10px"}  } autoClose onComplete={onCompletePost } />) : null}
                                { /* 전화번호 */ }
                                <SingUpInputNumber id="telephone" name="franchiseModel.telephone" title="전화번호" onChange={telephoneOnChange} state={telephone}/>
                                { /* 이메일 */ }
                                <SingUpInput id="email" name="franchiseModel.email" title="이메일" type="text"/>
                                { /* 버튼박스 */ }
                                <div className={ styles.btn_box }>
                                    <button type="submit">가입</button>
                                    <button type="button" onClick={ goBack }>취소</button>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SingUp;
