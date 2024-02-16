import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import './App.css';
import TodoItem from './components/todo_item';

function App() {
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState("All");

  function getData() {
    let data = [];
    if (localStorage.getItem('todos')) {
      data = JSON.parse(localStorage.getItem('todos'));
    }

    return data;
  }

  useEffect(() => {
    setTodos(getData());
  }, []);

  function handleDelete(index) {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  function handleRadio(e) {
    setCategory(e.target.value);
  }

  function handleCheck(index) {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [index]: !prevStates[index],
    }));
  }



  return (
    <div className='todo-app-wrapper'>
      <div className='sidebar'>
        <input type="radio" id="all" name="categories" value="All" onChange={handleRadio} checked={category === "All"} />
        <label tabIndex="0" htmlFor="all">All</label> <br />
        <input type="radio" id="groceries" name="categories" value="Grocaries" onChange={handleRadio} checked={category === "Grocaries"} />
        <label tabIndex="0" htmlFor="groceries">Groceries</label> <br />
        <input type="radio" id="college" name="categories" value="Collage" onChange={handleRadio} checked={category === "Collage"} />
        <label tabIndex="0" htmlFor="college">College</label><br />
        <input type="radio" id="payments" name="categories" value="Payments" onChange={handleRadio} checked={category === "Payments"} />
        <label tabIndex="0" htmlFor="payments">Payments</label>
      </div>
      <div className='main'>
        <h2>All tasks</h2>

        <Form></Form>

        <div className="todo">
          {todos.map((el, index) => (
            <TodoItem todo={el}
              key={index}
              index={index}
              onDelete={handleDelete}
              category={category}
            ></TodoItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
