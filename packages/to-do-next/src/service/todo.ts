import { AxiosResponse } from 'axios';
import http from './http';
import { ITodo } from '@/types/todo.type';
const BASE_URL = 'http://localhost:3000/api/';
export const getToDos = async () :Promise<ITodo[]> => {
    try{

       return await  http.get(`todos`).json()
    }catch(e){
        if(typeof window === 'undefined'){
            return Promise.resolve ([] as ITodo[]) ;
        }
        throw e;
        // return Promise.resolve ([] as ITodo[]) ;
    }
};
export const getToDo = (id: string): Promise<ITodo> => http.get(`todos/${id}`).json();
export const addToDo = (task: ITodo["task"]): Promise<ITodo> => http.post('todos', {
    body:JSON.stringify({task})}).json();
export const updateToDo = (id: string): Promise<ITodo> => http.put(`todos/${id}`).json();
export const deleteToDo = (id: string): Promise<ITodo> => http.delete(`todos/${id}`).json();
