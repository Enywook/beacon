import axios from 'axios';

export default axios.create({
    baseURL: "https://iut.jeremypgn.com",
    // headers: {
    //     Authorization: 'Bearer'
    // }
});