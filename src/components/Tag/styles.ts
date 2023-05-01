import styled, {css} from 'styled-components/native';

type Props = {
  backgroundColor: PokemonTypeColors;
};
export const Wrapper = styled.View<Props>`
  ${({backgroundColor}) => css`
    padding: 4px 32px;
    background-color: ${backgroundColor};
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-content: center;
    justify-items: center;
    border-radius: 24px;
  `}
`;

export const Text = styled.Text`
  ${({theme}) => css`
    font-size: 32px;
    color: ${theme.colors.text_01};
    align-items: center;
    justify-content: center;
    justify-items: center;
    text-transform: capitalize;
  `}
`;
