import { useContext, useState } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';
import Popup from './Popup';


const MealItem = (props) => {
  
  const[buttonPopup, setButtonPopup] = useState(false);

  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };


  return (
    <li className={classes.meal}>
      <div>
      <main> 
        <button className={classes.styledButton} onClick={()=> setButtonPopup(true)}>{props.name}</button>
        </main>
        <Popup triger = {buttonPopup} setTriger={setButtonPopup}> 
        <div className={classes.description}>{props.description} </div>
        <div>{props.imgURL}</div>
        </Popup>
        
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>

  );
};

export default MealItem;
