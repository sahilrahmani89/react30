import axios from 'axios'
export const getData = (api)=>{
    return axios.get(api).then((res)=>res).catch((err)=>err)
}