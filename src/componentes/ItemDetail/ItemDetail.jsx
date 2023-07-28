import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);


    const { agregarProducto } = useContext(CartContext);



    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }

    return (
        <>
            <div className='Item'>

                <h1>{nombre} </h1>
                <li>Valor: ${precio} </li>
                <li>ID: {id} </li>
                <li>Stock: {stock}</li>
                <li> {descripcion} </li>
                <img className='img' src={img} alt={nombre} />
                {
                    agregarCantidad > 0 ? (<Link className="btn btn-primary" to="/cart"> Finalizar compra </Link>) : (<ItemCount
                        inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                }
            </div>
        </>





    )
}

export default ItemDetail