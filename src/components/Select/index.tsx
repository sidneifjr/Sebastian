import { useId } from "react";
import { SelectItem } from "./styles"

const selectItems = [
  {
    value: 'Secure Câmeras Inc',
    key: 1
  },
  {
    value: 'Surveillance Cams LLC',
    key: 2
  },
  {
    value: 'DigiEye Group',
    key: 3
  },
  {
    value: 'CâmeraFi Inc',
    key: 4
  },
  {
    value: 'VidMasters Inc',
    key: 5
  }
]

export const Select = (props: any) => {
  const selectId = useId();

  return (
    <SelectItem name={selectId} onChange={props.onSelect}>
      {
        selectItems.map((selectItem) => {
          return (
            <option value={selectItem.value} key={selectItem.key}>
              {selectItem.value}
            </option>
          )
        })
      }
    </SelectItem>
  )
}
