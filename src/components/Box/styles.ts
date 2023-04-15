import styled, {css} from 'styled-components/native';

type Props = {
  backgroundColor: string;
};

export const Box = styled.TouchableOpacity<Props>`
  ${({theme, backgroundColor}) => css`
    flex: 1;
    height: 200px;
    background-color: ${backgroundColor};
    border-radius: ${theme.box.radius.medium};
    justify-content: flex-end;
  `}
`;
export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.typography.sizes.huge};
    font-weight: 900;
    font-family: 'Roboto';
    flex-direction: column;
    justify-self: flex-end;
    color: #fefefe;
    padding: 32px;
  `}
`;
