import React,{Fragment} from "react";
import { useSelector } from "react-redux";

const CantidadPokemonHook=()=>{

    const game_shop = useSelector((state)=>{
return state.game_shop
    });

    return (
        <Fragment>
            Unidades: {game_shop.pokemon}
        </Fragment>
      )

}

export default CantidadPokemonHook;