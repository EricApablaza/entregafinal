

import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { cart, vaciarCart, total, cantidadTotal } = useContext(CartContext);

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Completa todos los datos para poder finalizar la compra");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("El email no coincide, inténtalo una vez más");
            return;
        }

        const orden = {
            items: cart.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };


        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "inventario", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                })

            })
        )
            .then(() => {

                addDoc(collection(db, "pedidos"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCart();
                    })
                    .catch((error) => {
                        console.log("Se ha producido un error al crear la orden", error);
                        setError("Vuelva más tarde.");
                    });
            })
            .catch((error) => {
                console.log("Error al actualizar el stock", error);
                setError("Tenemos problemas con el stock de nuestros productos, vuelve pronto.");
            })

    }
    if (ordenId) {
        return (
            <strong> Tu compra ya va en camino, tu número de orden es {ordenId} </strong>
        )
    }
    return (
        <div>
            <h2> Finalizar tu compra </h2>
            <form onSubmit={manejadorFormulario}>
                {
                    cart.map(producto => (
                        <div key={producto.item.id}>
                            <p> {producto.item.nombre} x  {producto.cantidad} </p>
                            <p> {producto.item.precio} </p>
                            <hr />

                        </div>
                    ))
                }
                <strong> Cantidad Total: {cantidadTotal} </strong>
                <hr />

                <div className="form-group">
                    <label htmlFor=""> Nombre: </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Apellido: </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Teléfono: </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Repetir Email: </label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button type="submit" className="btn btn-primary"> Finalizar Compra </button>
            </form>

        </div>
    )
}

export default Checkout