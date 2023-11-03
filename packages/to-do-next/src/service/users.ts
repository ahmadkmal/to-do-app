import { IUser } from '@/types/user.type';
import http from './http';
import { getToDos } from './todo';
import { removeUserToken, setUserToken } from '@/utils/userToken';

export const getUsers = async (): Promise<IUser[]> => {
   const res = await http.get('users').json();
   return res as IUser[];
};

export const login = async (data:{
    username: string;
    password: string;
})=>{
    // set header for http request
    const token = btoa(`${data.username}:${data.password}`);
    setUserToken(token);
    try{

         await getToDos();
    }catch(e){
        throw new Error('password is not correct');
    }

    return true;
}