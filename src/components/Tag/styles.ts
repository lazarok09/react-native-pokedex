import styled, {css} from 'styled-components/native';

type Props = {
  backgroundColor: PokemonTypeColors;
};
export const Wrapper = styled.View<Props>`
  ${({backgroundColor}) => css`
    padding: 12px;
    background-color: ${backgroundColor};
    flex-direction: row;
    gap: 12px;
    align-items: center;
    border-radius: 12px;
  `}
`;

export const Text = styled.Text`
  ${({theme}) => css`
    font-size: 32px;
    color: ${theme.colors.text_01};
  `}
`;
