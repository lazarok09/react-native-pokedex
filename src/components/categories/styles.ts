import styled, {css} from 'styled-components/native';

export const Wrapper = styled.View`
  ${({theme}) => css`
    gap: ${theme.box.gaps.large};
  `}
`;
export const Item = styled.View`
  ${() => css`
    flex-direction: row;
  `}
`;
export const DoubleItems = styled.View`
  ${({theme}) => css`
    flex-direction: row;
    gap: ${theme.box.gaps.large};
    width: 100%;
  `}
`;
