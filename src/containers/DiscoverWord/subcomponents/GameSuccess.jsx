import React from "react";
import StarsBurst from 'src/components/dom/StarsBurst';
import { GiTrophyCup } from "react-icons/gi"


const GameSuccess = ({word,onClick}) => (
    <StarsBurst>
        <GiTrophyCup color="darkorange" size={60} />
        <h2>Estupendo lo lograste</h2>
        <h3>La palabra es <q>{word}</q></h3>
        <br />
        <small onClick={onClick}>continuar y ganar más</small>
    </StarsBurst>
)


export default GameSuccess;