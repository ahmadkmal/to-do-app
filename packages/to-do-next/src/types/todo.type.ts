export enum StatusType {

        NotComplete = 0,
        Completed = 1,
    }

    export interface ITodo {
        id: string;
        task: string;
        completed: StatusType;
    }