import styled, {css} from 'styled-components/native';

type Props = {
  backgroundColor: PokemonTypeColors;
};
export const Wrapper = styled.View<Props>`
  ${({backgroundColor}) => css`
    padding: 12px;
    background-color: ${backgroundColor};
  `}
`;
