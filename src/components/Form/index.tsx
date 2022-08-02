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
    console.log(e.target.value);
  }

  const formHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    console.log("name is: " + name + " and serial is: " + serial);

    if(name.trim().length === 0 || serial.trim().length === 0){
      return;
    } else if(serial.length < 1){
      return;
    }

    props.onAddItem(name, serial, manufacturer);

    var regex = new RegExp(/^[a-z0-9]+$/i);

    if(regex.test(serial)){
      console.log('success');
      setName('');
      setSerial('');
    } else {
      console.log('failure');
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
      />

      <Select onSelect={(e: ChangeEvent<HTMLInputElement>) => manufacturerHandler(e)} />

      <button style={{width:"100%", marginTop: "10px"}} type="submit">Add item</button>
    </form>
  )
}
