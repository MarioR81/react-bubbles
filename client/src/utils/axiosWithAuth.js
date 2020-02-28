import axios from 'axios';


export const axiosWithAuth = () => {
    //get token
    const token = window.localStorage.getItem('token');
    //create new instance of axios with config opj
    return axios.create({ 
        headers: {
            authorization: token
    },
    baseURL: 'http://localhost:5000'
    })
}