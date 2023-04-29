import styled, {css} from 'styled-components/native';

export const Wrapper = styled.View`
  ${() => css`
    position: relative;
  `}
`;
export const Text = styled.Text`
  ${() => css`
    padding: 0;
    position: absolute;
    bottom: 11px;
    left: 11px;
  `}
`;

export const CustomTextInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: '#a9a9a9',
  fontSize: '16px',
  underlineColorAndroid: 'transparent',
}))`
  ${() => css`
    padding: 12px;
    border-radius: 24px;
    color: #a9a9a9;
    background: #141414;
    font-size: 16px;
    padding-left: 60px;
  `}
`;
