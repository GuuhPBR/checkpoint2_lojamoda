import React from 'react';
import Produto from './Produto.js';
import short_azul from '../images/short_azul.jpg'; 
import vestido_florido from '../images/vestido_florido.jpg'; 
import vestido_listrado from '../images/vestido_listrado.jpg';
import vestido_liso_verde from '../images/vestido_liso_verde.jpg';
import { CorpoDiv, CorpoBox } from './Styles';

function Corpo() {
    return ( 
        <CorpoDiv>
            <CorpoBox>
                <Produto imagem={short_azul} descricao="Short Cintura Alta Feminino Cinto Fivela" preco={"80,00"} />
            </CorpoBox>
            <CorpoBox>
                <Produto imagem={vestido_florido} descricao="Vestido Longo Feminino Floral Manga Curta Bunfante" preco={"120,00"} />
            </CorpoBox>
            <CorpoBox>
                <Produto imagem={vestido_listrado} descricao="Vestido Midi Feminino Canelado Listrado" preco={"70,00"} />
            </CorpoBox>
            <CorpoBox>
                <Produto imagem={vestido_liso_verde} descricao="Vestido Midi Feminino Canelado Sem Manga" preco={"70,00"} />
            </CorpoBox>
        </CorpoDiv>
     );
}

export default Corpo;