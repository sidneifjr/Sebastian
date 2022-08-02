import { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { List } from './components/List';

export const App = () => {
  const [listing, setListing] = useState<string[]>([]);

  useEffect(() => {
    console.log(listing);
  }, [listing])

  const listingHandler = (formName: any, formSerial: any, formManufacturer: any) => {
    setListing((oldStateSnapshot) => {
      return [
        ...oldStateSnapshot,
        { name: formName, serial: formSerial, manufacturer: formManufacturer }
      ];
    });
  };

  return (
    <>
      <Form onAddItem={listingHandler} />
      <List lists={listing} />
    </>
  )
}
