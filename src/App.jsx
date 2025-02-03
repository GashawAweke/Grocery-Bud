import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './Items';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

// const getLocalStorage = (items) => {
//   let list = localStorage.getItem('list');
//   // console.log(list);
//   if (list) {
//     list = JSON.parse(localStorage.getItem('list'));
//   } else {
//     list = [];
//   }
//   return list;
// };

// one-liner
const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const App = () => {
  // const [items, setItems] = useState(getLocalStorage());
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = { name: itemName, completed: false, id: nanoid() };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (itemID) => {
    const filteredItems = items.filter((item) => item.id !== itemID);
    setItems(filteredItems);
    setLocalStorage(filteredItems);
  };

  // ERROR SOMEWHERE IN HERE

  const editItem = (itemID) => {
    const newItems = items.map((item) => {
      if (item.id === itemID) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items removeItem={removeItem} items={items} editItem={editItem} />
    </section>
  );
};

export default App;
