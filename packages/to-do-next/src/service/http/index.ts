import { getUserToken, removeUserToken } from "@/utils/userToken";
import ky,{Options} from "ky";

// const instance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   adapter:fetchAdapter,
// });
// //  response interceptor
// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//       if (error.response.status === 401) {
//         removeUserToken();
//       }
//     return Promise.reject(error);
//   }
// );

class HttpKy {
  instance: typeof ky;
  extendOption: Options;
  baseExtendOption: Options = {
    credentials: 'include',

    hooks: {

      afterResponse: [
        async (request, options, response) => {
        
          if (response.status === 401) {
            removeUserToken();

          }
        },
      ],
    },
  }
  constructor(){
    this.instance = ky.create({prefixUrl: 'http://localhost:3000/api'});
    this.extendOption = this.baseExtendOption; 
    this.instance = this.instance.extend(this.extendOption)
  }
  get(url: string, options?: Options) {
    return this.instance.get(url, options);
  }
  post(url: string, options?: Options) {
    return this.instance.post(url, options);
  }
  put(url: string, options?: Options) {
    return this.instance.put(url, options);
  }
  delete(url: string, options?: Options) {
    return this.instance.delete(url, options);
  }
  extend(options: Options){
    this.extendOption = {...this.extendOption, ...options};
    this.instance = this.instance.extend(this.extendOption);
  }
  restExtend(){
    this.instance = this.instance.extend(this.baseExtendOption);
  }
  
}
const http = new HttpKy();
export default http;