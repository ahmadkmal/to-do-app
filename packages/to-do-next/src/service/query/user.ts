import {  useMutation, useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getUsers, login } from "../users";
import { getUserToken } from "@/utils/userToken";
import React from "react";
import { IUser } from "@/types/user.type";

export const useGetUsers = () => {
  const response = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return response;
};
export const useLogInMutation = () => {
    const mutation = useMutation({
        mutationFn: login,
        retry: false,
        });
    return mutation;
    }
export const useGetUser = ()=>{
    const {data:users} = useGetUsers();
    const token = getUserToken();
    const username = React.useMemo(()=>{
        if(token){
            try{

                return atob(token).split(':')[0];
            }
            catch(e){
                return '';
            }
        }
        return '';
    }
    ,[token]);
    const user = React.useMemo(()=>{
        if(users){
            const filteredUer =  users.find(u=>u.username===username);
            if(filteredUer){
                return filteredUer;
            }
        }
        return {
            username: '',
            password: '',
            id: '',
            avatar: '',
            name: '',
        };
    },[users,username]);
    return user!;
}