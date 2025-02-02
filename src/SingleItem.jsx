import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

const SingleItem = ({ removeItem, item }) => {
  const [isChecked, setIsCHecked] = useState(item.completed);

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={() => setIsCHecked(!isChecked)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: isChecked && 'line-through',
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
