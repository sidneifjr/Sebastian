import styled from "styled-components";
import arrowDown from '../../assets/select-arrow.svg';

const SelectItem = styled.select`
  width: 100%;
  max-width: 500px;
  background: #ffffff url(${arrowDown}) no-repeat center;
  background-position-x: 96.5%;
  border: solid 1px #0D0D0D;
  border-radius: 5px;
  padding: 15px 20px;
  outline-color: #2C7BBF;
  transition: outline ease-in-out 0.2s;
  -webkit-appearance: none;
  -moz-appearance: none;
`

export { SelectItem };
