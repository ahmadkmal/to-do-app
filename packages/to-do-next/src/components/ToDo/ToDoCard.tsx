import React from "react";
import { Button } from "../ui/button";
import { ITodo ,StatusType } from "@/types/todo.type";
import { useDeleteToDo, useUpdateToDo } from "@/service/query/todo";

interface Props extends ITodo{
}

const ToDoCard = ({
    task,
    completed,
    id,
}: Props) => {
    const deleteMutation = useDeleteToDo(id);
    const updateMutation = useUpdateToDo(id);
  return (
    <div className="flex mb-4 items-center">
      <p className="w-full text-grey-darkest">
       {task}
      </p>
      <div className="flex gap-2">
      <Button variant='secondary' onClick={()=>updateMutation.mutate()}>
        {
            completed == StatusType.NotComplete ? 'Complete' : 'UnComplete'
        }
      </Button>
      <Button variant='destructive' onClick={()=>deleteMutation.mutate()}>
        Remove
      </Button>
      </div>
    </div>
  );
};

export default ToDoCard;
