import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import {ReactComponent as ShopingIcon} from '../../assets/shoping-bag.svg';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';
import './cart-icon.styles.scss';
import { createStructuredSelector } from 'reselect';

const CartIcon =({toggleCartHidden,itemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
    <ShopingIcon className='shopping-icon'/>
    <span className='item-count'>{itemCount}</span>
    </div>
);
const mapStateToprops = createStructuredSelector({
    itemCount:selectCartItemsCount
});
const mapDispatchToProps = dispatch =>({
    toggleCartHidden:()=> dispatch(toggleCartHidden())
});
export default connect(mapStateToprops,mapDispatchToProps)(CartIcon);