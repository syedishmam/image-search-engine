import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8fe60030b2a01ad2cfe8ea65b2956c1b9d41f24182e5e19af278ac6004f75b64'
    }
});