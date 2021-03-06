import { DialogClose } from '@radix-ui/react-dialog';
import styled from 'styled-components';

export interface ModalCloseProps {
  variant?: 'primary' | 'secondary';
  padding?: number;
  textColor?: string;
  fontWeight?: string;
}
export const ModalCloseStyled = styled(DialogClose)<ModalCloseProps>`
  padding: ${({ padding: p }) => p}px;
  background-color: ${(props) =>
    props.variant ? props.theme.primaryClrRed : 'transparent'};
  color: ${(props) =>
    props.textColor ? props.textColor : props.theme.mainText};
  font-weight: ${(props) => props.fontWeight};
  border-radius: ${(props) => (props.variant ? '8' : '0')}px;
  text-transform: capitalize;
`;
