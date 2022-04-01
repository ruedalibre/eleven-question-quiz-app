import styled, {css} from 'styled-components'

const Button = styled.button`
  background: #000;
  color: #fff;
  display: inline-block;
  width: 100%;
  padding: 15px;
  font-size: 100%;
  border: none;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 30px; 

  &:hover {
    background: #44a559;
    color: #fff;
  }
  
  /* Puse estilos diferentes para los botones de BEGIN y PLAY AGAIN pero reutilizando la plantilla de BUTTON*/
  ${props => props.black && css`
    background: #000;
    color: #fff;

    &:hover {
      background: grey;
      color: #fff;
    }

  `}
`;
  
export default Button;