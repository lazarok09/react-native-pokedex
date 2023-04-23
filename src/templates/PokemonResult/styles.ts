import styled, {css} from 'styled-components/native';

export const Wrapper = styled.View`
  ${({theme}) => css`
    color: ${theme.colors.text_01};
    background: ${theme.colors.background};
    flex: 1;
  `}
`;
