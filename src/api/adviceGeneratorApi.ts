import axios from "axios";

const BASEURL = "https://api.adviceslip.com";

const instance = axios.create({
  baseURL: BASEURL,
});

export const getAdvice  = async () =>{
  try{
    const response = await instance.get("/advice");
    return response.data;
  }catch(error){
    console.error(error);
  }
}