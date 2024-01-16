//Mark Lemuel B. Furton WD-401

import { useState } from 'react'

import './App.css'
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import ParentComponent from './components/ParentComponent';
import TodoList from './components/TodoList';
import MovieList from './components/MovieList';
import BookList from './components/BookList';

function App() {


  return (
    <>
      <div>
        <Hello/>
        <Welcome/>
        <ParentComponent/>
        <TodoList/>
        <MovieList/>
        <BookList/>
      </div>

      {/* <div className={`${isRainy===true ? 'dark': 'light'}`}>
        <RainOrShine/>
      </div> */}
      
    </>
  )
}

export default App;
