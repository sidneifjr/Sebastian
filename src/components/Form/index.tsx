import { ChangeEvent, useState } from 'react';
import { InputField } from '../InputField';
import { Select } from '../Select';

export const Form = (props: any) => {
  const [name, setName] = useState<string>("");
  const [serial, setSerial] = useState<string>("");
  const [manufacturer, setManufacturer] = useState<string>("");

  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const serialHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSerial(e.target.value);
  }

  const manufacturerHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setManufacturer(e.target.value);
  }

  const formHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    var regexValue = /^[a-z0-9]+$/i;
    var regex = new RegExp(regexValue);

    // Garante que os campos de nome e serial não estão vazios.
    if(name.trim().length === 0 || serial.trim().length === 0){
      return;
    } else if(serial.length < 1){
      return;
    }

    if(regex.test(serial)){
      props.onAddItem(name, serial, manufacturer);

      setName('');
      setSerial('');
    } else {
      return
    }
  }

  return (
    <form className='App' onSubmit={(e) => formHandler(e)}>
      <InputField
        type="text"
        label="Name"
        value={name}
        placeholder="Please, insert name."
        onChange={(e) => nameHandler(e)}
        maxLength={50}
      />

      <InputField
        type="text"
        label="Serial number"
        value={serial}
        placeholder="Please, insert the serial number."
        onChange={(e) => serialHandler(e)}
        maxLength={16}
        className="uppercase"
      />

      <Select onSelect={(e: ChangeEvent<HTMLInputElement>) => manufacturerHandler(e)} />

      <button style={{width:"100%", background:"#0D0D0D", color:"#ffffff", marginTop: "10px"}} type="submit">Add item</button>
    </form>
  )
}
