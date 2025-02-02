import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './Items';
const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = { name: itemName, completed: false, id: nanoid() };
    setItems([...items, newItem]);
  };

  const removeItem = (itemID) => {
    const filteredItems = items.filter((item) => item.id !== itemID);
    setItems(filteredItems);
  };

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items removeItem={removeItem} items={items} />
    </section>
  );
};

export default App;
