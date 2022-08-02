import styled from "styled-components";

const ListItemWrapper = styled.li`
  width: 100%;
  list-style: none;
  border: solid 1px #202020;
  border-radius: 5px;
  padding: 12px 10px;
  position: relative;
  display: flex;
  align-items: center;
`

const ListItemImage = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 12px;
`

const ListItemText = styled.p`
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
`

const ListItemSubtext = styled.small`
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
`

const ListItemButton = styled.button`
  height: 100%;
  width: 36px;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  background: red;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  right: 0;
`

export { ListItemWrapper, ListItemImage, ListItemText, ListItemSubtext, ListItemButton };
