import styled, { css } from 'styled-components';
import { ImSearch } from 'react-icons/im';

const InputContainer = styled.div`
  display: grid;
  height: fit-content;
  width: 100%;
`;

const InputLabel = styled.label`
  padding-left: 1rem;

  ${({ label }) => {
    if (label) {
      return css`
        display: grid;
        grid-row: 1 / span 1;
        margin-bottom: 0.5rem;
        font-size: 1.25rem;
        font-weight: bold;
      `;
    }
  }}
`;

const InputWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 2.5rem;
  border-radius: 4px;
  border: 1px solid black;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  justify-self: center;
  align-items: center;
`;

const InputField = styled.input`
  border: none;
  width: 100%;
  padding-left: 0.5rem;
  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #c1c1c1;
  }
`;

const ErrorMessage = styled.div`
  font-size: 12px;
  padding-left: 1rem;
  color: red;
`;

const InputComponent = ({ label, placeholder, value, onChange, onBlur, error, type = 'text' }) => {
  return (
    <InputContainer>
      <InputLabel label={label}>{label}</InputLabel>
      <InputWrapper>
        {placeholder === '검색' ? <ImSearch /> : null}
        <InputField
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </InputWrapper>
      {error && <ErrorMessage visible={'visible'}>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default InputComponent;