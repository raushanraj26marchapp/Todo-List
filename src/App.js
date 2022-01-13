import { useState } from 'react';
import Todos from './Todos';
import './App.css';


function App() {
  const [inputList, setInputList] = useState('');

  const [item, setItem] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  }
  const listOfItems = () => {
    setItem((oldItem) => {
      return [...oldItem, inputList];
    })
    setInputList("");
  }

  const deleteItem = (id) => {
    console.log("deleted")
    alert("List Deleted")
    setItem((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index != id;
      })
    })
  }

  return (
    <div className='container'>
      <div className='heading'>
        <center><h1>My To Do List</h1></center><br />
        <div className='mainf'>
          <input id="input" type='text' value={inputList} placeholder='add list here' onChange={itemEvent} />

          <button id="add" onClick={listOfItems}>Add</button>

          <ol>
            {item.map((ItemVal, index) => {
              return <Todos key={index} id={index} onSelect={deleteItem} text={ItemVal} />
            })}
          </ol>

        </div>
      </div>
    </div>
  );
}

export default App;