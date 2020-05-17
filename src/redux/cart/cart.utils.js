export const addItemToCart = (cartItems, cartItemsToAdd) =>{
    console.log(cartItemsToAdd,cartItems)
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemsToAdd.id
            ? {...cartItem, quantity:cartItem.quantity+1}
            : cartItem
            )
    }
    return [...cartItems, {...cartItemsToAdd, quantity:1}]
};

export const removeItemFromCart = (cartItems, cartItemsToRemove) =>{
    console.log(cartItemsToRemove,cartItems)
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemsToRemove.id
        );

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id != cartItemsToRemove.id)   
    }

    return cartItems.map(cartItem => 
        cartItem.id === cartItemsToRemove.id
        ? {...cartItem, quantity:cartItem.quantity - 1}
        : cartItem
        )
};