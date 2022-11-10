import React from 'react';
import { useState } from 'react';
import './App.css';
import { Layout, Menu} from 'antd';
import ToDoList from './Components/ToDoList';
import ToDoForm from './Components/ToDoForm';
import ModalEdit from './Components/ModalEdit';
import { ToDo } from './interface';
import { ToDoContext } from './interface';
const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const initialToDolist: ToDo[] = [];
  const [toDoList, setToDoList] = useState(initialToDolist);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalContext, setModalContext] = useState<ToDo | undefined>(undefined);
  const setModal = (context: ToDoContext) => {
    console.log('setModal');
    if (context) {
      setModalEdit(true);
      setModalContext(context);
    } else {
      setModalEdit(false);
      setModalContext(undefined);
    }
  };
  React.useEffect(() => {
    if (localStorage.getItem('list')) {
      const listLocalStorage = localStorage.getItem('list') as string;
      setToDoList(JSON.parse(listLocalStorage) as ToDo[]);
    }
  }, []);
  return (
    <>
      {modalEdit ? (
        <ModalEdit
          setList={setToDoList}
          context={modalContext}
          setModal={setModal}
        />
      ) : (
        <></>
      )}
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            
          >
            <Menu.Item className='header'>
              TO DO APP
            </Menu.Item>
          </Menu>
        </Header>
        <Content className='content'>
          <div className="site-layout-content">
            <ToDoForm setList={setToDoList} />
            <ToDoList
              setModal={setModal}
              setList={setToDoList}
              toDoList={toDoList}
            />
          </div>
        </Content>
        <Footer className='text-align-center'>
          to do list Created by Truong
        </Footer>
      </Layout>
    </>
  );
};

export default App;
