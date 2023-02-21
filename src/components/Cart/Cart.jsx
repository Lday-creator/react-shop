function Cart(props) {
    const { quantity = 0, handleCartShow = Function.prototype } = props;

    return (
        <div className='cart cyan darken-3 white-text' onClick={handleCartShow}>
            <i className='material-icons'>shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    );
}

export { Cart };
