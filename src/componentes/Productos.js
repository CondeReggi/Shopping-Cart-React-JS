import { Component } from "react";
import Producto from "./Producto";

const estilos = {
    Contenidos: {
        width: '60%',
        margin: '50px auto auto auto',
        display: 'flex',
        gridTemplateColumns: 'repeat(3, auto)',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

class Productos extends Component {
    render() {
        const { productos, agregarAlCarrito } = this.props;
        return (
            <div style={estilos.Contenidos}>
                {
                    productos.map(prod =>
                        <Producto
                            key={prod.nombre}
                            producto={prod}
                            agregarAlCarrito={agregarAlCarrito}
                        />
                    )
                }
            </div>
        )
    }
}

export default Productos