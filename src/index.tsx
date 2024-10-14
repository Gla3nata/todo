import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';

const todos: ToDo[] = [
  {
    id:0,
    text:'Первое действие',
    isDone: false
  },
  {
    id:1,
    text:'2 действие',
    isDone: true
  },
  {
    id:2,
    text:'3 действие',
    isDone: false
  },
  {
    id:3,
    text:'4 действие',
    isDone: false
  }


]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<HomePage todos={todos} />}></Route>
        <Route path='/list/:1' element={<ItemDescription todos={todos} />}></Route>
        <Route path='/todo' element={<ToDoListPage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

