import React from "react";
import classes from './Popup.module.css'


const Popup = (props) => {
  return props.triger ? (
    <div className={classes.popup}>
      <div className={classes['popup-inner']}>
        <button className={classes['close-btn']} onClick={()=> props.setTriger(false)}>Close</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
