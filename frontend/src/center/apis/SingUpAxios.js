import axios from 'axios'; // 액시오스

export function idAxios(id, setIdMsg) {
    console.log(id);
    axios.post("/idCheck.do",null,{ params : {
            "id" : id
        }})
        .then((res) => {
            if(res.status == "200"){
                setIdMsg("사용가능한 아이디 입니다.")
            }
        })
        .catch()
}