import Axios from "axios";
import { errorHandler } from "@/utils/error-handler";

/*
 * Axios.create
 * this is a function that creates a new instance of Axios.
 *
 * Parameters {objet} :
 * baseURL is the base URL of the API that we are going to use.
 */
const httpClient = Axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});

/*
 * Interceptor Request
 * this is a function that will be called before every request.
 */
httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token") as any | null;
    // check if token exists
    if (token) {
      // get access_token from token

      // check if access_token is not null
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/*
 * Interceptor Response
 * this is a function that will be called before every response.
 */
httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    errorHandler(error);
  }
);

export default httpClient;
