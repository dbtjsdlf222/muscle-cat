import '../css/SingUp.css';

function Singup(){
    return(
      <div className=''>
          <form action="/" method="post" name="form" id="form">
              <div id="signup">
                  <ul className="sign_upA">
                      <li id="index"><p>이름</p></li>
                      <li><input type="text" name="userName" id="userName" placeholder="이름을 입력하세요"/></li>
                  </ul>
                  <ul className="sign_upA">
                      <li id="index"><p>아이디</p></li>
                      <li><input type="text" name="userID" id="userID" placeholder="아이디를 입력하세요" minLength="6"
                                 maxLength="16"/>
                          <button type="button" name="idCheck" id="idCheck" onClick="idCheck1()" value="중복확인">중복확인
                          </button></li>
                  </ul>
                  <ul className="sign_upA" >
                      <li>6~16자 영문(소문자), 숫자
                          입력가능합니다.
                      </li>
                  </ul>
                  <ul className="sign_upA" >
                      <li id="index"><p>비밀번호</p></li>
                      <li><input type="password" name="userPW" className="pw" id="userPW" placeholder="비밀번호를 입력하세요"
                                 minLength="6" maxLength="16"/></li>
                  </ul>
                  <ul className="sign_upA" >
                      <li >6~16자 영문(소문자), 숫자, 특수문자
                          입력가능합니다.
                      </li>
                  </ul>
                  <ul className="sign_upA" >
                      <li id="index"><p>비밀번호 확인</p></li>
                      <li><input type="password" name="pwCheck" className="pw" id="pwCheck" minLength="6"
                                 maxLength="16"/></li>
                      <li id="pw_wrong_msg"
                         >비밀번호가
                          일치하지 않습니다.
                      </li>
                      <li id="pw_right_msg">비밀번호가
                          일치합니다.
                      </li>
                  </ul>

                  <ul className="sign_upA">
                      <li id="index"><p>이메일</p></li>
                      <li><input type="text" name="email" id="email"/></li>
                      <li>
                          <div className="check_font" id="emailCheck"></div>
                      </li>
                  </ul>
                  <ul className="sign_upA" >
                      <li id="index" id="address"><p>주센터</p></li>
                      <li><input type="text" id="zipNo" name="zipNo" />
                          <button type="button" id="addrfind" className="findaddr" onClick="goPopup();"
                                 >주소 찾기
                          </button></li>
                      <input type="hidden" id="address2" value="주소찾기"/>
                  </ul>
              </div>
              <div id="click">
                  <button id="submit1" type="button" onClick="check();">제출하기</button>
                  <button id="reset" type="reset">취소</button>
              </div>
          </form>

      </div>
    );
}
export default Singup;