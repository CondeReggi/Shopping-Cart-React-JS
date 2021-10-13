import { Component } from "react";
import './Producto.css'

const estilos = {
    Producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius:' 5px',
    },
    img: {
        width: '100%',
        borderRadius: '15px',
    },
    button: {
        padding: '5px 10px',
        width: '100px',
        borderRadius: '15px',
        border: 'none',
        backgroundColor: '#815fA',
        cursor: 'pointer',
    }
}

class Producto extends Component {
    render() {
        const { producto, agregarAlCarrito } = this.props;

        return (
            <div style={estilos.Producto}>
                <img style={estilos.img} src={producto.img}></img>
                <div className="descripcion">
                    <h2>{producto.nombre}</h2>
                    <p>${producto.precio}</p>
                    <button className="btn_add" style={estilos.button} onClick={() => agregarAlCarrito(producto)}> Agregar </button>
                </div>
            </div>
        )
    }
}

export default Producto