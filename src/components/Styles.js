import styled, {css} from "styled-components";

const MenuDiv = styled.div`
    background: crimson;
    color: white;
`;

const TextCenter = styled.div`
    text-align: center;
`;

const RodapeDiv = styled.div`
    background: #BABACA;
    padding: 10px;
    position: absolute;
    bottom: 0;
    width: 100%;
    
`;

const MenuItens = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const CorpoDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
    background-color: aliceblue;
    height: 78vh;
`;

const CorpoBox = styled.div`
    background-color: whitesmoke;
    padding: 10px;
    margin: 0px 10px;
    border: 1px solid black;
    border-radius: 10px;
    height: 400px;
`; 

const MenuItem = styled.li`
    display: block;
    padding: 10px;
    cursor: pointer;
    ${props => props.active == true && css`
        background: #af0021;
    `}
`; 

export {MenuDiv, RodapeDiv, TextCenter, MenuItens, CorpoDiv, CorpoBox, MenuItem};