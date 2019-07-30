import styled from "styled-components";
import { SideBarPorps } from "./interfaces";

const SideBar = styled.div`
  height: 100%;
  width: ${(props: SideBarPorps) => props.width}%;
  background-color: ${(props: SideBarPorps) => props.bgColor};
  color: ${(props: SideBarPorps) => props.color};
  padding: 1em;
  box-sizing: border-box;
`;

export default SideBar;
