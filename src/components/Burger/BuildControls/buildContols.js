import React from 'react';
import classes from './buildcontols.css';
import Buildcontol from './BuildControl/buildcontrol';
const controls =[
    { label: 'Salad', type:'salad'},
    { label: 'Bacon', type:'bacon'},
    { label: 'Cheese', type:'cheese'},
    { label: 'Meat', type:'meat'}
];
const buildContols = (props) =>(
    <div className={classes.BuildControls}>
        <p>Current Price : <b>{props.price.toFixed(2)}</b> </p>
        {controls.map(ctrl=>(<Buildcontol 
        key={ctrl.label} 
        label={ctrl.label}
        added={() =>props.ingAdded(ctrl.type)} 
        removed={()=>props.ingRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
        />
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordererd}
        > ORDER NOW</button>
    </div>
)

export default buildContols;