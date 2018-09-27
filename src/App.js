import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {data: []};
  }

  actualizarItems(e){
    let busqueda = e.target.value
    let url = `https://api.mercadolibre.com/sites/MCO/search?q=${busqueda}&limit=10`
    let result = axios.get(url);
   
    result.then(x => {
      this.setState({data:x.data.results})
      console.log(x)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Busca en Mercadolibre Colombia</h1>
        </header>
        <main>
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="Buscar" id="search" type="text" onChange={this.actualizarItems.bind(this)}/>
          </div>
        </div>
       
        <ul className="collection">
          {
            this.state.data.map(item => 
            <li className="collection-item avatar">
              <img src={item.thumbnail} alt="" className="circle"/>
              <span className="title">{item.title}</span>
              <p>Precio: {item.price}</p>
              <a href={item.thumbnail} className="secondary-content"></a>
            </li>
          )
          }
          </ul> 
          
        </main>
      </div>
    );
  }
}

export default App;
