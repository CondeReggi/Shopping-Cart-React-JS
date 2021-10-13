import { Component } from "react";

const estilos = {
    span: {
        backgroundColor: 'red',
        padding: '2px 10px',
        color: 'white',
        borderRadius: '15px',
        fontSize: '0.9rem',
        width: '20px'
    }
}

class BurbujaAlerta extends Component{
    obtenerNumero(num){
        if (!num) { return '0' }
        return (num > 9) ? '9+' : num
    }
    render(){
        const { valor } = this.props;

        return (
            <span style={estilos.span}>
                {this.obtenerNumero(valor)}
            </span>
        )
    }
}

export default BurbujaAlerta