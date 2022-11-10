import {Form, Input, Button} from 'antd';
import React from 'react';
import { ToDoFormProps } from '../interface';
import { KeyboardEvent } from 'react';
import { updateStorage as update } from '../utils';
const formItemLayout = {
  labelCol: {span: 6},
  wrapperCol: {span: 18},
};
const buttonItemLayout = {
  wrapperCol: {span:4 },
};


const ToDoForm= ({setList}:ToDoFormProps) => {
  const [form] = Form.useForm();
  const formInput = Form.useWatch('formInput',form)
  const [formStatus,setFormStatus] = React.useState<boolean>(false)
  const submitRef = React.useRef<HTMLButtonElement>(null)
  const onKeyEvent = (event:KeyboardEvent<HTMLInputElement>) => {
    console.log("ok")
    if (event.key === "Enter" && formStatus) {
      if(formInput.length>=3)
      (submitRef.current)?.click()
    }
}
  const onAdd = async () => {
    try {
      console.log('Success:', formInput)
      const task = {
        id: +new Date(),
        content:formInput,
        isDone:false
      }
      if(task?.content.length>=3) {
        update(setList,task,"push")
      form.setFieldValue('formInput',"")
      }
      
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if((event.target.value)?.length>=3) setFormStatus(true)
      else setFormStatus(false)
  }
  return(
    <Form {...formItemLayout} form={form} className="toDoForm">
    <Form.Item
     name = "formInput" 
      label="To do"
      validateStatus={formStatus? "":"error"}
      help={formStatus? "":"To do content should be greater than 3"}
      className="formInput center"
    >
      <Input onKeyDown={(event)=>onKeyEvent(event)} placeholder="To do content" id="toDo" onChange={onInputChange} />
    </Form.Item>
    <Form.Item {...buttonItemLayout} className="formSubmit center">
        <Button ref={submitRef} type="primary" onClick={onAdd} disabled={!formStatus}>
          Add
        </Button>
      </Form.Item>
    </Form>

    
  )
}
export default ToDoForm;