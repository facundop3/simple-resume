import styled from "styled-components";
import { SheetProps } from "./interfaces";

const Sheet = styled.div`
  width: 50%;
  height: 29.7cm;
  display: flex;
  background-color: ${(props: SheetProps) => props.bgColor};
`;

export default Sheet;
