import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase-utils';

import CartDropDown  from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({ currentUser,hidden }) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/contact' className='option'>
                CONTACT
            </Link>
            {currentUser ? (
                <div className='options' onClick={() => auth.signOut()}>SIGN OUT</div>
            ) : (
                    <Link to='/signin' className='option'>
                        SIGN IN
                    </Link>)}
             <CartIcon/>       
        </div>
        {hidden ? null: <CartDropDown/>}
        
    </div>
);
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})
export default connect(mapStateToProps)(Header);