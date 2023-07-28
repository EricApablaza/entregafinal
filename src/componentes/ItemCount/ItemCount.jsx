import { useState } from "react";
import './ItemCount.css'



const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);


    const incrementar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuir = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }


    return (
        <>
            <div>
                <button className="btn" onClick={incrementar}> + </button>
                <p> {contador} </p>
                <button className="btn" onClick={disminuir}> - </button>
            </div>
            <button className="btn" onClick={() => funcionAgregar(contador) }> Agregar al carro de compra </button>

        </>
    )
}



export default ItemCount