import { Component } from 'react';
import Productos from './componentes/Productos'
import NavBar from './componentes/Navbar'

class App extends Component {

  state = {
    productos: [
      {nombre: 'Tomate', precio: 15 , img: '/productos/tomate.jpg'},
      {nombre: 'Lechuga', precio: 23 , img: '/productos/lechuga.jpg'},
      {nombre: 'Arbejas', precio: 44 , img: '/productos/arbejas.jpg'}
    ],
    carro: [],
    esCarroVisible: false
  }

  agregarAlCarrito = (producto) => {
    const { carro } = this.state;

    if( carro.find( elemento => elemento.nombre === producto.nombre) ){
      const nuevoCarro = carro.map(el => (el.nombre === producto.nombre) ? ({
        ...el,
        cantidad: el.cantidad + 1
      }) : el ) 
      return this.setState({ carro: nuevoCarro })
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    })
  }

  mostrarCarro = () => {
    this.setState( { esCarroVisible : !this.state.esCarroVisible} )
  }

  render() {
    const { esCarroVisible } = this.state;
    return (
      <div>
        <NavBar mostrarCarro={this.mostrarCarro} esCarroVisible={esCarroVisible} Agregar={this.state.carro}/>
        <Productos 
          productos = {this.state.productos}
          agregarAlCarrito = {this.agregarAlCarrito}
        />
      </div>
    )
  }
}

export default App;
