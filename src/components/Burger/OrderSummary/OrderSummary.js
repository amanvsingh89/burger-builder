import { React  } from "react";
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary =(props) =>{
    const ingSummary = Object.keys(props.ingredients).map(
        igkey=>{
            return <li key={igkey}><span style={{textTransform:'capitalize'}} >{igkey}</span>: {props.ingredients[igkey]}</li>
        }
    );
return(
    <Aux>
        <h3>Your Order</h3>
        <p> Burger Ingredients</p>
        <ul>
            {ingSummary}
        </ul>
        <p><b>TOTAL PRICE: </b> {props.totalPrice.toFixed(2)}</p>
        <p>Continue to check out?</p>
        <Button btnType="Danger"
        clicked={props.purchasedCancell}
        >Cancel</Button>
        <Button btnType="Success" 
        clicked={props.purchaseContinue}
        >Continue</Button>

    </Aux>
);

}
export default orderSummary;