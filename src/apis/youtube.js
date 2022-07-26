import axios from 'axios';

const KEY = 'AIzaSyAUasliUIvv-83FMdywNBqr6Q6hGyQcLIA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
