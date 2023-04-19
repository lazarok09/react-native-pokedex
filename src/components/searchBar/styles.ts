import styled, {css} from 'styled-components/native';

export const Wrapper = styled.View`
  ${() => css`
    flex: 1;
    position: relative;
  `}
`;

export const CustomTextInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: '#a9a9a9',
  fontSize: '16px',
  underlineColorAndroid: 'transparent',
}))`
  ${() => css`
    flex: 1;
    padding: 12px;
    border-radius: 24px;
    color: #a9a9a9;
    background: #141414;
    font-size: 16px;
  `}
`;
