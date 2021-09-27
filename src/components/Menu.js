import React from 'react';
import { MenuDiv, TextCenter, MenuItens, MenuItem } from './Styles';

function Menu(props) {

    function trocaMenu(menu){
        props.setMenu(menu)
    }
    return ( 
        <MenuDiv>
            <TextCenter>
                <h1>Loja Moda</h1>
                <MenuItens>
                    <MenuItem active={props.menu == 'home'} onClick={() => trocaMenu('home')}>
                        Home
                    </MenuItem>
                    <MenuItem  active={props.menu == 'masculino'} onClick={() => trocaMenu('masculino')}>
                        Moda Masculina
                    </MenuItem>
                    <MenuItem active={props.menu == 'feminino'} onClick={() => trocaMenu('feminino')}>
                        Moda Feminina
                    </MenuItem>
                    <MenuItem active={props.menu == 'infantil'} onClick={() => trocaMenu('infantil')}>
                        Moda Infantil
                    </MenuItem>
                    <MenuItem active={props.menu == 'sobre'} onClick={() => trocaMenu('sobre')}>
                        Sobre
                    </MenuItem>
                </MenuItens>
            </TextCenter>
        </MenuDiv>
     );
}

export default Menu;