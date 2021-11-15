import axios from 'axios'; // 액시오스

export default function customAxios(url, testM) {
    axios.get("/test")
    .then(function (response) {
        testM("여기오면 성공이에요","여기오면 성공일까?");
    });
}