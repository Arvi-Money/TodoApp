import './index.css';
import trash from '../../assets/Vector.svg';
import { useState } from 'react';

function TodoItem(props) {
  const { name, category } = props.todo;
  const [checkboxStates, setCheckboxStates] = useState({});

  function deleteIcon(index) {
    if (props.onDelete) {
      props.onDelete(index);
    }
  }

  function handleCheck(index) {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [index]: !prevStates[index],
    }));
  }

  function getCheckboxState(index) {
    return checkboxStates[index] || false;
  }


  return (
    <div className='item-wrapper'>
      <div className='check'>
        <input
          className="tasks-input"
          type="checkbox"
          onChange={() => handleCheck(props.index)}
          checked={getCheckboxState(props.index)}
        />
        <p
          style={{
            textDecoration: getCheckboxState(props.index)
              ? "line-through"
              : "none",
          }}
        >
          {name}
        </p>
      </div>
      <p className='category'>{props.category}</p>
      <img
        src={trash}
        className='trash_icon'
        alt="Trash icon"
        onClick={() => deleteIcon(props.index)}
      />
    </div>
  );
}

export default TodoItem;



