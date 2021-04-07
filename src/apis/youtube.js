import axios from 'axios';

// API keys should not be committed, but this project is made
// following a React course and has not enough relevance to
// implement a .env file or server-side methods.
const API_KEY = "AIzaSyAhimCGpWuw1EFXNRnTrPDUZySKJebHIlY"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: API_KEY
    }
})
