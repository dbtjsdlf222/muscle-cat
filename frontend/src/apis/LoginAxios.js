import axios from 'axios'; // 액시오스

export default function LoginAxios(url, id, pw) {
    console.log(id);
    console.log(pw);
   axios.post(url,null,{ params : {
           "id" : id,
           "pw" : pw
       }})
       .then(res => console.log(res))
       .catch()
}