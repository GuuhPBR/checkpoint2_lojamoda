import React from 'react';
import Produto from './Produto.js';
import bermuda_folhas from '../images/bermuda_folhas.jpg'; 
import camisa_folhas from '../images/camisa_folhas.jpg'; 
import regata_estampa from '../images/regata_estampa.jpg';
import regata_folhas from '../images/regata_folhas.jpg';
import { CorpoDiv, CorpoBox } from './Styles';

function Corpo() {
    return ( 
        <CorpoDiv>
            <CorpoBox>
                <Produto imagem={bermuda_folhas} descricao="Bermuda Masculina Moletinho Estampa Folhas" preco={"90,00"} />
            </CorpoBox>
            <CorpoBox>
                <Produto imagem={camisa_folhas} descricao="Camisa Masculina Estampa Folhas Manga" preco={"80,00"} />
            </CorpoBox>
            <CorpoBox>
                <Produto imagem={regata_estampa} descricao="Regata Masculina Estampa Folhas" preco={"35,00"} />
            </CorpoBox>
            <CorpoBox>
                <Produto imagem={regata_folhas} descricao="Regata Masculina Estampa Folhas" preco={"40,00"} />
            </CorpoBox>
        </CorpoDiv>
     );
}

export default Corpo;