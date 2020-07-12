import axios from 'axios';

export default axios.create({
    baseURL: "http://api.chat.j2w.fr",
    // headers: {
    //     Authorization: 'Bearer'
    // }
});