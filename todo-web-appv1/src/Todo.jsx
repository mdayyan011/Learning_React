import { useState } from 'react';

const Todo = () => {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);
  const [id, setId] = useState(0);
  const handleItem = (event) => {
    // console.log(event.target.value);
    setInputText(event.target.value);
  };
  const hanldeItemAddition = (newItem) => {
    //   console.log('I got clicked ' + newItem);
    items.map((item) => {
      console.log(item);
      console.log(item.id);
      console.log(item.value);
    });
    let obj = {
      id: id,
      value: newItem,
    };
    setItems([...items, obj]);
    setInputText('');
    setId(id + 1);
  };
  const deleteItem = (id) => {
    let updatedItems = items.filter((item) => {
      return item.id != id;
    });

    setItems(updatedItems);
  };
  return (
    <div className='main-content'>
      <div className='main-container'>
        <h1>To Do List</h1>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Enter Item To Add'
            value={inputText}
            onChange={handleItem}
          />
          <button className='add-btn' onClick={() => hanldeItemAddition(inputText)}>Add</button>
        </div>
        <ul>
          {items.map((item) => (
            <div style={{ display: 'flex' }} key={item.id} className='item-container'>
              <li>{item.value}</li>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
