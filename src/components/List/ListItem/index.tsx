import { ListItemWrapper, ListItemImage, ListItemText, ListItemSubtext, ListItemButton } from "./styles"

import videoCamera from '../../../assets/video-camera.svg';

interface IListItem {
  src?: string,
  text: string | number,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  onAddList: Function
}

export const ListItem = (props:IListItem) => {
  return (
    <ListItemWrapper>
      <ListItemImage src={props.src || videoCamera}></ListItemImage>
      <ListItemText>{props.text}</ListItemText>
      <ListItemSubtext></ListItemSubtext>
      <ListItemButton onClick={props.onClick}>X</ListItemButton>
    </ListItemWrapper>
  )
}
