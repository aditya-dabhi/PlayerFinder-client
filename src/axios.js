import axios from 'axios'

const instance = axios.create({
    baseURL:"https://player-finder-mern.herokuapp.com/"
})

export default instance