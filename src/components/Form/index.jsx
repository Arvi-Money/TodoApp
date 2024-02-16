import { useState } from 'react'
import './index.css'

function Form() {
  const [input, setInput] = useState('');
  const [work, setWork] = useState([]);
  const [category, setCategory] = useState("All");

  function getData() {
    let data = [];
    if (localStorage.getItem('todos')) {
      data = JSON.parse(localStorage.getItem('todos'));
    }
    return data;
  }

  function validate(input) {
    if (input.trim().length < 3) {
      alert('Input must be at least 3 characters long');
      return false;
    }
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate(input)) {
      let obj = {
        id: Date.now(),
        name: input,
        category: category,
        status: 'active'
      };

      console.log(work);


      let todos = getData();
      todos.push(obj);
      localStorage.setItem('todos', JSON.stringify(todos));
      setInput('');

    }
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && document.activeElement !== document.querySelector(".field")) {
      e.preventDefault();
      if (input.trim() !== '') {
        setWork(prevTasks => [
          ...prevTasks, { task: input, category: 'SomeCategory' }
        ]);
        setInput('');
      }
    }
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className='field' placeholder={`Add a new task inside "${category}" category`} value={input} onChange={handleInput} onKeyDown={handleKeyDown} />
      </form>
    </div>


  );
}

export default Form;
