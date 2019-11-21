import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Finder from './Components/Finder';
import Pokedex from './Components/Pokedex';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pokemonCaught: [],
    }
  }

  componentDidMount = () => {
    axios.get('/api/pokemon').then(res => {
      this.setState({
        pokemonCaught: res.data
      })
    })
  }

  catchPokemon = (body) => {
    axios.post('/api/pokemon', body).then(res => {
      this.setState({
        pokemonCaught: res.data
      })
    })
  }

  saveName = (id, body) => {
    axios.put(`/api/pokemon/${id}`, body).then(res => {
      this.setState({
        pokemonCaught: res.data
      })
    })
  }

  releasePokemon = (id) => {
    axios.delete(`/api/pokemon/${id}`).then(res => {
      this.setState({
        pokemonCaught: res.data
      })
    })
  }

  render(){
    return (
      <div className="App">
       <Header />
       <Finder catchFn={this.catchPokemon}/> 
       <h2>PokeDex</h2>
       <Pokedex 
        pokemonList={this.state.pokemonCaught}
        saveFn={this.saveName}
        releaseFn={this.releasePokemon}
       />
      </div>
    );
  }
}

export default App;
