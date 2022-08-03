import styled from 'styled-components';

const InputFieldWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;
`

const InputFieldLabel = styled.label`
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 500;
  background: #ffffff;
  padding-right: 10px;
  padding-left: 5px;
  position: absolute;
  top: -8px;
  left: 15px;
  display: block;
  z-index: 9;
  transition: font-weight ease-in-out 0.2s, color ease-in-out 0.2s;

  &.active {
    color: #2C7BBF;
  }
`

const InputFieldItem = styled.input`
  width: 100%;
  padding: 15px 20px;
  background: #ffffff;
  border: solid 1px #0D0D0D;
  border-radius: 5px;
  outline-color: transparent;
  transition: outline ease-in-out 0.2s;

  &:focus {
    outline-width: 1px;
    outline-color: #2C7BBF;
  }

  &::placeholder {
    color: #CECED2;
  }

  &.uppercase {
    text-transform: uppercase;

    &::placeholder {
      text-transform: initial;
    }
  }
`

export { InputFieldWrapper, InputFieldLabel, InputFieldItem };
