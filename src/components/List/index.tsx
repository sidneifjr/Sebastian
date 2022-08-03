import { ListWrapper } from "./styles"
import { ListItem } from "./ListItem"

export const List = (props: { lists: any[] }) => {
  return (
    <ListWrapper>
      {props.lists.map((listItem, index) => (
        console.log(listItem),

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
