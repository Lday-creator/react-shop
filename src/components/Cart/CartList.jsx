import { CartItem } from './CartItem';

function CartList(props) {
    const {
        order = [],
        handleCartShow = Function.prototype,
        removeFromCart = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className='collection cart-list'>
            <li className='collection-item active'>Корзина</li>
            {order.length ? (
                order.map((item) => (
                    <CartItem
                        key={item.id}
                        removeFromCart={removeFromCart}
                        decQuantity={decQuantity}
                        incQuantity={incQuantity}
                        {...item}
                    />
                ))
            ) : (
                <li className='collection-item'>Корзина пуста</li>
            )}
            <li className='collection-item active'>
                Общая стоимость: {totalPrice} руб.
                <button className='btn btn-small cyan lighten-3 black-text secondary-content'>
                    Оформить
                </button>
            </li>
            <i className='material-icons basket-close' onClick={handleCartShow}>
                close
            </i>
        </ul>
    );
}

export { CartList };
