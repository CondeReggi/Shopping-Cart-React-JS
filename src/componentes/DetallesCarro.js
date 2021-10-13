import { Component } from "react";

const estilos = {
    detalles: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        color: 'black'
    },
    ul: {
        padding: 0,
        margin: 0
    },
    li: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    }
}

class DetallesCarro extends Component {
    render() {
        const { carro } = this.props
        return (
            <div style={estilos.detalles}>
                <ul style={estilos.ul}>
                    {   
                        carro.map(el =>
                            <li style={estilos.li} key={el.nombre}>
                                <img src={el.img} alt={el.nombre} width='50' height='32' />
                                <strong>{el.nombre}</strong>
                                <span><strong>Cantidad:</strong> {el.cantidad}</span>
                            </li>
                        )
                    }
                    <li style={estilos.li} key='precio'>
                        <strong>TOTAL: ${carro.reduce((valor, setValor) => valor += (setValor.cantidad * setValor.precio), 0)}</strong>
                    </li>
                </ul>
            </div>
        )
    }
}

export default DetallesCarro