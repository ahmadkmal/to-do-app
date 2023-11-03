import http from "@/service/http";

export const  setUserToken = async (token: string) => {


    if(!token){
        return;
    }
    if(typeof window !== "undefined"){

        document.cookie = `token=${token};max-age=3600;path=/`;
    }

}
export const getUserToken =  () => {
    let token : string|undefined = '';
    if(typeof window == "undefined"){
    return '';
    }

        token = document.cookie.split(';').find(item => item.includes('token'));
    
    if(token){
        return token.split('=')[1];
    }
    return '';
}
export const removeUserToken = () => {
    if(typeof window == "undefined"){
        return;
    }
    document.cookie = `token=;max-age=0;path=/`;
   
    http.restExtend();
}