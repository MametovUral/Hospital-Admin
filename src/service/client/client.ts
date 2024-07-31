import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosHeaders,
} from "axios";
import Qs from "qs";

const baseURL = "http://localhost:3000/";

const createInstance = (config: AxiosRequestConfig) => {
  const instance = axios.create({
    baseURL,
    paramsSerializer: {
      encode: (params) =>
        Qs.stringify(params, { arrayFormat: "brackets" }),
    },
    ...config,
  });

  instance.interceptors.request.use(
    async (requestConfig: InternalAxiosRequestConfig<any>) => {
      requestConfig.headers = new AxiosHeaders({
        "Content-Type":
          requestConfig.headers["Content-Type"] || "application/json",
        Authorization: requestConfig.headers["Authorization"] || "",
      });
      return requestConfig;
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => (response.data ? response.data : response),
    (error: AxiosError) => {
      if (error.response && error.response.status) {
        throw error.response.data;
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

const publicInstance = createInstance({});

const privateInstance = createInstance({
  // headers: {
  //   Authorization: `Bearer ${JSON.parse(localStorage.getItem("accessToken")!)}`,
  // },
});
const privateInstanceForMediaData = createInstance({
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("accessToken")!)}`,
  },
});

export { privateInstance, publicInstance, privateInstanceForMediaData };
