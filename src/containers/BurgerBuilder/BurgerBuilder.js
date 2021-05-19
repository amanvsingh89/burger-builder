import React , { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/buildContols';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const ING_PRICE={
    salad : 1,
    bacon : 0.5,
    cheese : 0.5,
    meat : 1
};

class BurgerBuilder extends Component {
    state = {
        ingedrients: {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        },
        totalPrice : 4,
        purchasable: false,
        purchasing: false
    }
    updatePurchase (ingredients) {
        const sum = Object.keys(ingredients).map(igKey =>{
            return ingredients[igKey];
        }).reduce((sum,el)=>{
            return sum +el;
        } ,0);
        this.setState({purchasable: sum>0})
    }
    purchaseHandler =() =>{
        this.setState({purchasing:true})
    }
    purchaseCancelledHandler =()=>{
        this.setState({purchasing:false})
    }
    purchaseContinueHandler =()=>{
        alert('You continue');
    }
    addIngHandler =(type) =>{
        const oldCount= this.state.ingedrients[type];
        const updatedCount= oldCount+1;
        const updateIng={ ...this.state.ingedrients};
        updateIng[type]=updatedCount;
        
        const priceAddition= ING_PRICE[type];
        const oldPrice= this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({totalPrice:newPrice,ingedrients:updateIng});
        this.updatePurchase(updateIng);
    }
    removeIngHandler =(type) =>{
        const oldCount= this.state.ingedrients[type];
        if(oldCount<=0)
        {return;}
        const updatedCount= oldCount-1;
        const updateIng={ ...this.state.ingedrients};
        updateIng[type]=updatedCount;
        
        const priceDed= ING_PRICE[type];
        const oldPrice= this.state.totalPrice;
        const newPrice=oldPrice - priceDed;
        this.setState({totalPrice:newPrice,ingedrients:updateIng});
        this.updatePurchase(updateIng);
    }
render(){
    const disabledInfo={
        ...this.state.ingedrients
    };
    for(let key in disabledInfo)
    {
        disabledInfo[key] = disabledInfo[key] <= 0
    }
  
    return (
        <Aux>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelledHandler}>
                <OrderSummary ingredients={this.state.ingedrients}
                 purchasedCancell={this.purchaseCancelledHandler}
                 purchaseContinue={this.purchaseContinueHandler}
                 totalPrice={this.state.totalPrice}
                 ></OrderSummary>
            </Modal>
            <Burger ingedrients={this.state.ingedrients}/>
            <BuildControls 
            ingAdded={this.addIngHandler} 
            ingRemoved={this.removeIngHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordererd={this.purchaseHandler}
           
            />
        </Aux>
    );
}
}

export default BurgerBuilder;