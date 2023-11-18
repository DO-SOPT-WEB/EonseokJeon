import axios from 'axios';

const reqAPI = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: 'http://3.39.54.196/',
});

export default reqAPI;
