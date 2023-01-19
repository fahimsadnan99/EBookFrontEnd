import axios from "axios";

export const BaseUrl = "https://fine-jade-katydid-sari.cyclic.app/api"
// export const BaseUrl = "http://localhost:5000/api"

const apiAxios = axios.create({baseURL : BaseUrl})

apiAxios.defaults.headers.common["Authorization"] = 'Bearer ' ;




export async function get(url, config = {}) {
    return await apiAxios
      .get(url, { ...config })
      .then((response) => response.data);
  }
  
  export async function post(url, data, config = {}) {
    return apiAxios
      .post(url, { ...data }, { ...config })
      .then((response) => response.data);
  }
  
  export async function put(url, data, config = {}) {
    return apiAxios
      .put(url, { ...data }, { ...config })
      .then((response) => response.data);
  }
  
  export async function del(url, config = {}) {
    return await apiAxios
      .delete(url, { ...config })
      .then((response) => response.data);
  }
  
  export default apiAxios;