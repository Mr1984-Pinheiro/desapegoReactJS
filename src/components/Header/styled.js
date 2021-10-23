import styled from 'styled-components'

export const Container = styled.div`
    background-color: #FA8072;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
width: auto;
height: 70px;
`;

export const SearchInput = styled.input`
    border: 0;
    border-radius: 25px;
    width: ${props => props.active ? 300 : 0}px;
    height: 50px;
    background-image: url('/assets/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;
    background-color: #FFF;
    outline: 0;
    padding-left: 50px;
    transition: all ease .3s; 
    font-size: 15px;
    cursor: pointer;

    &:focus {
        cursor: auto;
    }
`;