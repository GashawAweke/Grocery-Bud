import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

const SingleItem = ({ removeItem, item, editItem }) => {
  // const [isChecked, setIsCHecked] = useState(item.completed);

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => removeItem(item.id)}
      >
        <MdDeleteForever /> Delete
      </button>
    </div>
  );
};
export default SingleItem;
