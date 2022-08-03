// import { MouseEventHandler } from "react";
import { ListItemWrapper, ListItemImage, ListItemText, ListItemSubtext, ListItemButton } from "./styles"

import videoCamera from '../../../assets/video-camera.svg';

interface IListItem {
  // onDelete: MouseEventHandler<HTMLButtonElement> | undefined;
  src?: string,
  text: string | number,
  onAddList: Function,
  subtext: string
}

export const ListItem = (props:IListItem) => {
  return (
    <ListItemWrapper>
      <ListItemImage src={props.src || videoCamera}></ListItemImage>
      <ListItemText>{props.text}</ListItemText>
      <ListItemSubtext>{props.subtext}</ListItemSubtext>
      <ListItemButton
        // onClick={props.onDelete}
      >X</ListItemButton>
    </ListItemWrapper>
  )
}
