import styled from "styled-components";


const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
`;


export default Title;

//Se informar o usuario o tamanho definindo com o componente, caso contrario será RED
//color: ${props => props.corDoTexto || 'red'};