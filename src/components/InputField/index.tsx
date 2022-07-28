import { useId, useState } from 'react'
import { InputFieldWrapper, InputFieldLabel, InputFieldItem } from './styles'

interface IInputField {
  label: string,
  value?: string | number,
  type: string,
  placeholder: string
}

export const InputField = (props: IInputField) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputId = useId();

  const inputHandler = () => {
    setIsFocused(!isFocused);
  }

  return (
    <InputFieldWrapper>
      <InputFieldLabel className={isFocused ? 'active' : ''} htmlFor={inputId}>{props.label}</InputFieldLabel>
      <InputFieldItem name={inputId} type={props.type} value={props.value} placeholder={props.placeholder} onFocus={inputHandler} onBlur={inputHandler} />
    </InputFieldWrapper>
  )
}
