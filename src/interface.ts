import { Dispatch, SetStateAction } from "react"
import ToDoForm from "./Components/ToDoForm"

export interface ToDo {
    id: number,
    isDone?: boolean
    content?: string
};
export interface ToDoListProps extends ToDoFormProps{
    toDoList: ToDo[]
    setModal: (context:ToDoContext)=>void

}
export interface ToDoFormProps {
    setList: Dispatch<SetStateAction<ToDo[]>>
}
export interface ToDoItemProps extends ToDoFormProps{
    item: ToDo
    setModal: (context:ToDoContext)=>void


}
export interface ModalEditProps {
    setModal: (context:ToDoContext)=>void
    context: ToDoContext
    setList: Dispatch<SetStateAction<ToDo[]>>

}
export type ToDoContext = ToDo|undefined
export type Update = (
setList: Dispatch<SetStateAction<ToDo[]>>, 
task: ToDo, 
action: string
) => void
