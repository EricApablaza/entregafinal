import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item, cantidad, img }) => {
  const { eliminarProducto } = useContext(CartContext);

  return (
    <div>
      <h4> {item.nombre} </h4>
      <p> {img} </p>
      <p> Cantidad: {cantidad} </p>
      <p> Precio: ${item.precio} </p>
      <button className="btn btn-primary" onClick={() => eliminarProducto(item.id)}> Eliminar </button>
      <hr />
    </div>
  )
}

export default CartItem