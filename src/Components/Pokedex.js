import React from 'react';
import Pokemon from './Pokemon';

const Pokedex = (props) => {
    return (
        <div className="pokedex">
            {props.pokemonList.map((e) => {
                return (
                    <Pokemon 
                        key={e.id}
                        name={e.name}
                        img={e.img}
                        id={e.id}
                        saveFn={props.saveFn}
                        releaseFn={props.releaseFn}
                    />
                )
            })}
        </div>
    )
}

export default Pokedex;