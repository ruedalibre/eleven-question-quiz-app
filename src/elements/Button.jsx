import styled, {css} from 'styled-components'

const Button = styled.button`
  background: #000;
  color: #fff;
  display: inline-block;
  padding: 20px;
  border: none;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 15px;
  margin-right: 10px;

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