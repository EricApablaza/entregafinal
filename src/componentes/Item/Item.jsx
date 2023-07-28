import './Item.css'
import { Link } from 'react-router-dom'



const Item = ({ id, nombre, precio, img, stock }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h2 className="text-center"> {nombre} </h2>
            <p>Precio:${precio} </p>
            <h3>Stock: {stock} </h3>
            <h3>ID: {id} </h3>
            <Link to={`/item/${id}`} className="btn btn-primary" > Ver Más </Link>
        </div>
    )
}

export default Item 