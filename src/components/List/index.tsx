import { ListWrapper } from "./styles"
import { ListItem } from "./ListItem"

export const List = (props: { lists: any[] }) => {
  return (
    <ListWrapper>
      {props.lists.map((listItem, index) => (
        <ListItem
          key={index}
          text={listItem.name}
          subtext={listItem.serial}
          onAddList={listItem.onAddList}
          // onDelete={() => listItem.handleDelete(listItem.index)}
        />
      ))}
    </ListWrapper>
  )
}
