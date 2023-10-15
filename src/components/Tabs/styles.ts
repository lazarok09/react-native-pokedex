import styled, {css} from 'styled-components/native';

export const TabContainer = styled.View`
  ${({theme}) => css`
    flex-direction: row;
    gap: 20px;
    margin-bottom: ${theme.box.gaps.xxlarge};
  `}
`;

export const TabItemContainer = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
  `}
`;

export const TabText = styled.Text<{backgroundColor: PokemonTypeColors}>`
  ${({backgroundColor}) => css`
    font-size: 36;
    color: #ffffff;
    padding-top: 12;
    padding-bottom: 12;
    width: 250;
    text=align: center;
    border-radius: 34;
    ${backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `};
  `}
`;
