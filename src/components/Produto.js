import React from 'react';
import styled from "styled-components";

const ProdutoEstilo = styled.div`
    height: auto;
`;

const Imagem = styled.img`
    height: 300px;
`;

function Produto(props) {
    return ( 
        <ProdutoEstilo>
            <Imagem src={props.imagem} />
            <div>
                {props.descricao}
            </div>
            <div>
                R$ {props.preco}
            </div>
        </ProdutoEstilo>  
     );
}

export default Produto;