import { useContext } from 'react';
import { ShopContext } from '../../context';

function CartItem(props) {
    const { id, name, price, quantity, icon } = props;

    const { removeFromCart, decQuantity, incQuantity } = useContext(ShopContext);

    return (
        <li className='collection-item'>
            <img src={icon} alt='' className='cart-list-image' />
            {name}{' '}
            <i className='material-icons cart-list-quantity' onClick={() => decQuantity(id)}>
                remove
            </i>{' '}
            x{quantity}{' '}
            <i className='material-icons cart-list-quantity' onClick={() => incQuantity(id)}>
                add
            </i>{' '}
            = {price * quantity} руб.
            <span className='secondary-content'>
                <i className='material-icons cart-delete' onClick={() => removeFromCart(id)}>
                    close
                </i>
            </span>
        </li>
    );
}

export { CartItem };
