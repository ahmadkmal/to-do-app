"use client"
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ITodo } from "@/types/todo.type";
import ToDoCard from "./ToDoCard";
import { useAddToDo, useGetToDos } from "@/service/query/todo";
import ToDoList from "./ToDoList";

export const fetchCache = 'force-no-store'
// 'auto' | 'default-cache' | 'only-cache'
// 'force-cache' | 'force-no-store' | 'default-no-store' | 'only-no-store'
export const runtime = 'edge'
export const revalidate = 0
// 'edge' | 'nodejs'
const Todo = () => {
  const [task, setTask] = React.useState("");
//   const { data: toDoList, isFetching } = useGetToDos();
  const addMutation = useAddToDo();
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4 ">
          <h1 className="text-grey-darkest">Todo List</h1>
          <div className="flex mt-4 gap-2">
            <Input
              placeholder="Add Todo"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <Button
                disabled={!task}
                onClick={() => {
                    addMutation.mutate( task,{
                        onSuccess:()=>{
                            setTask('')
                        }
                    } );
       
                }}
            >Add</Button>
          </div>
        </div>
        <div>
            <ToDoList/>
          {/* {toDoList?.map((todo) => (
            <ToDoCard {...todo} key={todo.task} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Todo;
