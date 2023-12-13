import axios from "axios";

export default {
    getAllTopics() {
        return axios.get("https://api.srf.zoltans.co/api/v1/topic");
    },
    getTopicById(id) {
        return axios.get("https://api.srf.zoltans.co/api/v1/topic/" + id);
    }
};