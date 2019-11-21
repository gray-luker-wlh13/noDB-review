import React, {Component} from 'react';
import axios from 'axios';
import Grass from './Grass';

class Finder extends Component {
    constructor(){
        super();
        this.state = {
            wildPokemonArr: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/wild-pokemon').then(res => {
            this.setState({
                wildPokemonArr: res.data
            })
        }).catch(err => console.log(err));
    }

    render(){
        console.log(this.state.wildPokemonArr)
        return(
            <div className="finder">
                {this.state.wildPokemonArr.map((e, i) => {
                    return(
                        <Grass 
                        catchFn={this.props.catchFn}
                        key={i}
                        pokemonData={e}
                        refreshFn={this.componentDidMount}
                        />
                    ) 
                })}
            </div>
        )
    }
}

export default Finder;