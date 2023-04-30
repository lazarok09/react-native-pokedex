import styled, {css} from 'styled-components/native';

type Props = {
  backgroundColor: PokemonTypeColors;
};
export const Wrapper = styled.View<Props>`
  ${({theme, backgroundColor}) => css`
    color: ${theme.colors.text_01};
    background: ${backgroundColor};
    flex: 1;
    padding: 0 16px;
    padding-top: ${theme.box.gaps.large};
  `}
`;
