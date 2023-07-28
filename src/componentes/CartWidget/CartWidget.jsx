import './CartWidget.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
    const { cantidadTotal } = useContext(CartContext);
    const imgCart = "../img/carrito.png";
    return (
        <div>
            <Link to="/cart">
                <img className='imgCart' src={imgCart} alt="carro de compras" />
                {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget