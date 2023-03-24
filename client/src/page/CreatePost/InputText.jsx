import styled, { css } from 'styled-components';

export default function inputText({ label }) {
  return (
    <InputContainer>
      <InputLabel label={label}>{label}</InputLabel>
      <InputWrapper>
        <Textarea placeholder="간단한 내용을 입력하세요" />
      </InputWrapper>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
`;

const InputLabel = styled.label`
  ${({ label }) => {
    if (label) {
      return css`
        display: flex;
        margin-bottom: 0.5rem;
        font-size: 1.25rem;
        font-weight: bold;
        color: #ce8e5b;
      `;
    }
  }}
`;
const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  border-radius: 0.25rem;
  border: 1px solid #cecece;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  justify-self: center;
  align-items: center;
  box-shadow: inset 0 0 5px 0 #ececec;
  :focus-within {
    border: 1px solid #ce8e5b;
    box-shadow: inset 0 0 5px 0 #ce8e5b;
  }
  transition: border-color 0.3s ease-in-out;
`;

const Textarea = styled.textarea`
  border: none;
  width: 100%;
  height: 100%;
  resize: none;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #c1c1c1;
  }
`;
