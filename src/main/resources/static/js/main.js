//아이디 포커스 이벤트
document.getElementById("id_text").onfocus = function (e) {
   document.getElementById("id_box").classList.add("focus");
};
document.getElementById("id_text").onblur = function (e) {
   document.getElementById("id_box").classList.remove("focus");
};
//비밀번호 포커스 이벤트
document.getElementById("pw_text").onfocus = function (e) {
   document.getElementById("pw_box").classList.add("focus");
};
document.getElementById("pw_text").onblur = function (e) {
   document.getElementById("pw_box").classList.remove("focus");
};