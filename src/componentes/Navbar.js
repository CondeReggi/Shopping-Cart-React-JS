import { Component } from "react";
import Carrito from "./Carrito";

const estilo = () => ({
    display: 'flex',
    width: '100%',
    height: '80px',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxShadow: "1px 3px 1px #9E9E5E"
})

class NavBar extends Component{
    render(){
        const { Agregar , mostrarCarro , esCarroVisible} = this.props

        return (
            <nav style={estilo()}>
                <h1>Carrito</h1>
                <Carrito Agregar={Agregar} mostrarCarro={mostrarCarro} esCarroVisible={esCarroVisible}/>
            </nav>
        )
    }
}

export default NavBar