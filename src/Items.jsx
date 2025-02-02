import SingleItem from './SingleItem';
const Items = ({ removeItem, items }) => {
  // console.log(items);

  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} removeItem={removeItem} />;
      })}
    </div>
  );
};
export default Items;
