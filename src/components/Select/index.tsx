import { useId } from "react";
import { SelectWrapper, SelectItem } from "./styles"

interface ISelect {
  props?: any
}

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

export const Select = (props: ISelect) => {
  const selectId = useId();

  const selectHandler = () => {
    // rodar um filter, com os elementos possuindo os valores correspondentes!
  }

  return (
    <SelectWrapper>
      <SelectItem name={selectId} onChange={selectHandler}>
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
    </SelectWrapper>
  )
}
