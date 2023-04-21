import styled, {css} from 'styled-components/native';

export const Wrapper = styled.View`
  ${({theme}) => css`
    gap: ${theme.box.gaps.large};
  `}
`;
export const DoubleItems = styled.View`
  ${({theme}) => css`
    flex: 1;
    flex-direction: row;
    gap: ${theme.box.gaps.large};

    width: 100%;
  `}
`;
