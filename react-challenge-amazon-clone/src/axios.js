import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-7a4f2.cloudfunctions.net/api'
    //  "http://localhost:5001/clone-7a4f2/us-central1/api",
});

export default instance;


