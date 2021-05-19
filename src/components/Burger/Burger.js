import React from 'react';
import classes from './burger.css';
import BurgerIng from './BurgerIngerdients/Burgeringerdients';

const burger = (props) =>{
    const transIngedgredients=Object.keys(props.ingedrients).map(igkey =>{
        return [...Array(props.ingedrients[igkey])].map((_,i) =>{
            return <BurgerIng key={igkey + i} type={igkey} />
        }
        );
    });
    
    //console.log(transIngedgredients);
    return(
        <div className={classes.Burger}>
            <BurgerIng type="bread-top"></BurgerIng>
            {transIngedgredients}
            <BurgerIng type="bread-bottom"></BurgerIng>
        </div>
    );
};

export default burger;