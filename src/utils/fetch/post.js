import axios from "axios";

// api 데이터 호출
export const postApi = (url) => {
    const response = axios.get(url);

    return response;
};
