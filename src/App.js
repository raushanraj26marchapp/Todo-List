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
    setItem((oldItem)=>{
      return oldItem.filter((arrElem, index)=>{
        return index!=id;
      })
    })
  }

  return (
    <>
      <div className='header'>
        <h1>Todo List</h1>
        <div className='input'>
        <input type='text' value={inputList} placeholder='add list here' onChange={itemEvent} />

          <button id='add' onClick={listOfItems}>Add</button>
          <ol>
            {item.map((ItemVal, index) => {
              return <Todos key={index} id={index} onSelect={deleteItem} text={ItemVal} />
            })}
          </ol>

        </div>
      </div>
      
    </>
  );
}

export default App;
