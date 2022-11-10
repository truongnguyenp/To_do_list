import { EditOutlined, LoadingOutlined, EyeOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
import { ToDoItemProps } from '../interface';
import { updateStorage as update } from '../utils';

const { Meta } = Card;
const ToDoItem = ({setList,item,setModal}:ToDoItemProps) => {
  return(
  <Card
  className="toDoItem "
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    extra={item.isDone? <CheckCircleOutlined/>:<LoadingOutlined/>}
    actions={[
      <DeleteOutlined onClick={()=>{
        console.log("deleted succcesfully")
        update(setList,{id:item.id},"remove")}
    } key="remove" />,
      <EditOutlined key="edit" onClick={
        ()=>{
          setModal(item);        }
      } />,
      <EyeOutlined  onClick={()=>{
        console.log("updated succcesfully")
        update(setList,{id:item.id, content:item.content, isDone:!item.isDone},"update")}
    } key="toggleStatus"/>
    ]}
  >
    <Meta
      
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={item.content}
    />
  </Card>
)};

export default ToDoItem;