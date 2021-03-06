import styled from 'styled-components';
import { ThemeProperties } from '../../styles/theme.config';
import { SelectorProps } from '../Selector/Selector.styled';

export interface SearchBoxProps extends SelectorProps {
  isOnSearchbox?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  iconSize?: string | number;
  absolutePosition?: boolean;
  bordered?: boolean;
  offset?: number;
  offsetY?: number;
  height?: number;
  padding?: number;
  fontWeight?: string;
  fontSize?: number;
}
export const SearchboxStyled = styled.input<SearchBoxProps>`
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}px` : '60px')};
  padding: ${(props) =>
    props.padding
      ? `${props.padding}px`
      : 'padding-block: 22px;padding-left: 72px;'};

  border-radius: 16px;
  background-color: ${({ theme }: { theme: ThemeProperties }) =>
    theme.accentBg};
  color: ${({ theme }: { theme: ThemeProperties }) => theme.accentText};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize}px;
  user-select: none;

  &:focus {
    outline: none;
    user-select: none;
  }
`;
