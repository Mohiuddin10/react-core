const getStoredCart = () => {
    const cart = localStorage.getItem('cart')
    if (cart) {
       return JSON.parse(cart);
    }
    else return [];
}

const safeCartToLS = cart => {
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied);
}

const addToLS = (id) => {
    const cart = getStoredCart();
    cart.push(id)
    safeCartToLS(cart);
}

export {getStoredCart, addToLS}