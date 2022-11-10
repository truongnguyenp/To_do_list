import React from 'react';
import ToDoItem from './ToDoItem';
import { ToDo, ToDoListProps} from '../interface';
const ToDoList=({setList,toDoList,setModal}:ToDoListProps) => {
    return (
        <div className='toDoList grid grid-template-columns center grid-gap' >
        {toDoList.map(
                (item:ToDo,index:number)=>(<ToDoItem key={item.id} setModal={setModal} setList={setList} item={item}/>)
            )
        }
        </div>
        
    )
};


export default ToDoList;