import { InputField } from './components/InputField';
import { Select } from './components/Select';

export const App = () => {
  const inputFields = [
    {
      label: "Name",
      type: "text",
      placeholder: "Please, insert name.",
      key: 1
    },
    {
      label: "Serial number",
      type: "text",
      placeholder: "Please, insert the serial number.",
      key: 2
    }
  ]

  return (
    <main className='App'>
      {
        inputFields.map((inputField) => {
          return (
            <InputField key={inputField.key} type={inputField.type} label={inputField.label} placeholder={inputField.placeholder} />
          )
        })
      }

      <Select />
    </main>
  )
}
