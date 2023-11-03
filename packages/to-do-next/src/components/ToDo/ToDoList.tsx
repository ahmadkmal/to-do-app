import { useGetToDos } from '@/service/query/todo';
import React from 'react'
import ToDoCard from './ToDoCard';

type Props = {}

const ToDoList = (props: Props) => {
    const { data: toDoList, isFetching } = useGetToDos();
  return (
    <>
    {toDoList?.map((todo) => (
        <ToDoCard {...todo} key={todo.task} />
      ))}
    </>
  )
}

export default ToDoList