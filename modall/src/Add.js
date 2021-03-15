import React, {useState} from 'react';
import ModalExample from './App';
import './App.css';
 
const initialList = [
 
];
 
const ListWithAddItem = ({item}) => {
  const [value, setValue] = React.useState('');
  const [list, setList] = React.useState(initialList);
 
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  const handleChange = event => {
    setValue(event.target.value);
  };
 
  const handleSubmit = event => {
    if (value) {
      setList(list.concat(value));
    }
 
    setValue('');
 
    event.preventDefault();
    // event.stopPropagation();
  };
 
  return (
    <div className="one">
        
      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
        
      <form onSubmit={handleSubmit}>
       Write Here <input type="text" value={value} onChange={handleChange} />
        <button className="btn" style={{color:'white', padding: '20px', backgroundColor:'green'}} type="submit">Add Item</button>
      </form>
      <button onClick={toggle}>open modal</button>
      <ModalExample toggle={toggle} modal={modal} text={value} />
    </div>
  );
};
 
export default ListWithAddItem;