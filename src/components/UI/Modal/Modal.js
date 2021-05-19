import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal =(props)=>(
  <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
    <div className={classes.Modal}
     style={{ transform: props.show ? 'transalateY(0)':'transalateY(-100vh)',
       opacity: props.show ? '1':'0'         
    }}
    >
        {props.children}
    </div>
    </Aux>
)
export default modal;