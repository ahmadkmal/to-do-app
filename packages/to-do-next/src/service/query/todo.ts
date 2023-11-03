import { useMutation, useQuery, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { addToDo, deleteToDo, getToDo, getToDos, updateToDo } from "../todo";

export const useGetToDos = () => {
  const response = useSuspenseQuery({
    queryKey: ["todo"],
    queryFn: getToDos,
    
  });

  return response;
};

export const useGetToDo = (id: string) => {
  const response = useSuspenseQuery({
    queryKey: ["todo", id],
    queryFn: () => getToDo(id),
  });

  return response;
};
export const useUpdateToDo = (id:string) => {
  const queryClient = useQueryClient();
  const response = useMutation({
    mutationFn: ()=>updateToDo(id),
    onSuccess() {
      // Invalidate
      queryClient.invalidateQueries({
        queryKey: ["todo"],
      });
    },
  });

  return response;
};
export const useAddToDo = () => {
  const queryClient = useQueryClient();
  const response = useMutation({
    mutationFn: addToDo,
    onSuccess() {
      // Invalidate
      queryClient.invalidateQueries({
        queryKey: ["todo"],
      });
    },
  });

  return response;
};
export const useDeleteToDo = (id:string) => {
  const queryClient = useQueryClient();
  const response = useMutation({
    mutationFn: ()=>deleteToDo(id),
    onSuccess() {
      // Invalidate 
      queryClient.invalidateQueries({
        queryKey: ["todo"],
      });
    },
  });

  return response;
};
