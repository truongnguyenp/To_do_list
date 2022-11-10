import { ToDo, Update } from "./interface";
export const updateStorage: Update = (setList, task, action) => {
  let list: ToDo[] = [];
  if (localStorage.getItem('list')) {
    let localStorageList: ToDo[] = JSON.parse(
      localStorage.getItem('list') as string
    ) as ToDo[];
    list = localStorageList;
  }
  if (action === 'push') list.push(task);
  else if (action === 'remove') list = list.filter((item) => item.id !== task.id);
  else if (action === 'update') {
    list.forEach((item: ToDo) => {
      if (item.id === task.id) {
        item.content = task.content;
        item.isDone = task.isDone;
      }
    });
  }
  localStorage.setItem('list',JSON.stringify(list))
  setList(list);
};