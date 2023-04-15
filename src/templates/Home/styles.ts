import styled, {css} from 'styled-components/native';

export const Wrapper = styled.View`
  ${({theme}) => css`
    padding: ${theme.box.gaps.small};
  `}
`;
