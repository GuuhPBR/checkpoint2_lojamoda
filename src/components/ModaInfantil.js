import React from 'react';
import Produto from './Produto.js';
import cropped_princesas from '../images/cropped_princesas.jpg'; 
import conjunto_infantil from '../images/conjunto_infantil.jpg'; 
import casaco_infantil from '../images/casaco_infantil.jpg';
import camiseta_juvenil from '../images/camiseta_juvenil.jpg';
import { CorpoDiv, CorpoBox } from './Styles';

function Corpo() {
    return ( 
        <CorpoDiv>
            <CorpoBox>
                <Produto imagem={cropped_princesas} descricao="Blusa Juvenil Cropped Estampa Princesas Disney " preco={"25,00"} />
            </CorpoBox>
            <CorpoBox>
                <Produto imagem={conjunto_infantil} descricao="Conjunto Infantil Estampa Frontal Fruta" preco={"50,00"} />
            </CorpoBox>
            <CorpoBox>
                <Produto imagem={casaco_infantil} descricao="Casaco Infantil Moletom Capuz" preco={"80,00"} />
            </CorpoBox>
            <CorpoBox>
                <Produto imagem={camiseta_juvenil} descricao="Camiseta Juvenil Estampa Bart Simpsons" preco={"25,00"} />
            </CorpoBox>
        </CorpoDiv>
     );
}

export default Corpo;