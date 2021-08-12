import './styles.css';

import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from "./js/componentes";

export const todoList = new TodoList();

//todoList.todos.foreach(todo=> crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml);
todoList.countPendientes();
