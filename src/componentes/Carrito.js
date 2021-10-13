import { Component } from "react";
import BurbujaAlerta from "./BurbujaAlerta";
import DetallesCarro from "./DetallesCarro";

const estilos = {
    button: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '10px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    span: {
        position: 'relative',
        left: 12,
        top: 20
    }
}

class Carrito extends Component{
    render(){
        const {Agregar, esCarroVisible, mostrarCarro} = this.props;
        const cantidad = Agregar.reduce((valor, setValor) => valor += setValor.cantidad ,0)
        return (
            <div>
                <span style={estilos.span}>
                    {(cantidad !== 0) ? <BurbujaAlerta valor={cantidad}/> : null}
                </span>
                <button onClick={mostrarCarro} style={estilos.button}>
                    Carro
                </button>
                {esCarroVisible ? <DetallesCarro carro={Agregar}/> : null}
            </div>
        )
    }
}

export default Carrito