import { ListWrapper } from "./styles"
import { ListItem } from "./ListItem"

export const List = (props: { lists: any[] }) => {
  return (
    <ListWrapper>
      {props.lists.map((listItem: { src: string; text: string | number; onAddList: Function }, index: number) => (
        <ListItem
          key={index}
          text={listItem.text}
          onAddList={listItem.onAddList}
        />
      ))}
    </ListWrapper>
  )
}
