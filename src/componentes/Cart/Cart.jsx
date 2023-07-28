import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, vaciarCart, total, cantidadTotal } = useContext(CartContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <p> El carro esta vacío.</p>
                <h2>Agrega productos para finalizar la compra.</h2>
                <Link className="btn btn-primary" to="/"> Ver Productos </Link>
            </>
        )   
    }

    return (
        <div>
            {cart.map(producto => <CartItem key={producto.id}  {...producto} />)}
            <h3>Total: $ {total} </h3>
            <h3>Total de la Compra: {cantidadTotal} </h3>
            <button className="btn btn-primary" onClick={() => vaciarCart()}> Vaciar Carro de compras </button>
            <Link className="btn btn-primary" to="/checkout" > Finalizar Compra </Link>
        </div>
    )
}

export default Cart