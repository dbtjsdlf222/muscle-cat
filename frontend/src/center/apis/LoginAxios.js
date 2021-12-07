import axios from 'axios'; // 액시오스

export default function LoginAxios(id, pw) {
    console.log(id);
    console.log(pw);
   axios.post("/test",null,{ params : {
           "id" : id,
           "pw" : pw
       }})
       .then(res => console.log(res))
       .catch()
}