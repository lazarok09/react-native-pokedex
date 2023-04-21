import styled, {css} from 'styled-components/native';

export const Wrapper = styled.View`
  ${() => css`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `}
`;
