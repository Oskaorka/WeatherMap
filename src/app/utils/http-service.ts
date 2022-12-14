import axios from "axios";
import configFile from "../../config-file.json";

const http: any = axios.create({
  baseURL: configFile.apiPath,
});
http.interceptors.response.use(
  (res: any) => {
    res.data = { content: res.data };
    return res;
  },
  function (error: any) {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedErrors) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);
const httpService = {
  get: http.get,
  post: http.post,
};

export default httpService;
