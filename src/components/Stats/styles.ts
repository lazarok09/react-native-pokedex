import styled, {css} from 'styled-components/native';

type Props = {
  progress: number;
  progressColor: PokemonTypeColors;
};

export const LabelText = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.text_01};
    font-weight: bold;
    text-transform: uppercase;
    width: 150px;
  `}
`;
export const HpText = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.text_01};
    font-weight: bold;
    font-size: ${theme.typography.sizes.xlarge};
    text-transform: uppercase;
  `}
`;
export const StatusNumber = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.text_03};
    font-weight: bold;
    font-size: ${theme.typography.sizes.xlarge};
    text-transform: uppercase;
  `}
`;

export const ProgressContainer = styled.View`
  ${() => css`
    height: 9px;
    width: 100%;
    background: #181818;
    border-radius: 12px;
    position: relative;
  `}
`;
export const Progress = styled.View<Props>`
  ${({progress, progressColor}) => css`
    color: white;
    position: absolute;
    height: 100%;
    z-index: 2;
    top: 0;
    background: ${progressColor};
    width: ${progress + '%'};
  `}
`;
