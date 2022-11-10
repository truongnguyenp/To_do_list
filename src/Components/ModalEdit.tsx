import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { ModalEditProps, ToDo } from '../interface';
import { Form, Input, Switch } from 'antd';
import { updateStorage as update } from '../utils';
const ModalEdit = ({ setList, setModal, context }: ModalEditProps) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const toDoContent = Form.useWatch('toDoContent', form);
  const toDoStatus = Form.useWatch('toDoStatus', form);
  const handleOk = () => {
    setLoading(true);
    if (context) {
      const task: ToDo = {
        id: context?.id,
        content: toDoContent===undefined? context?.content:toDoContent,
        isDone: toDoStatus===undefined? context?.isDone:toDoStatus,
      };
      console.log(task);
      update(setList, task, 'update');
    }
    setTimeout(() => {
      setLoading(false);
      setModal(undefined);
    }, 500);
  };

  const handleCancel = () => {
    setModal(undefined);
  };

  return (
    <>
      <Modal
        open={true}
        title="Edit to-do"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="toDoContent"
            label="Context"
            required
            tooltip="This is a required field"
          >
            <Input placeholder="to-do content" defaultValue={context?.content} />
          </Form.Item>

          <Form.Item label="Status" name="toDoStatus" valuePropName="checked">
            <Switch defaultChecked={context?.isDone} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalEdit;
