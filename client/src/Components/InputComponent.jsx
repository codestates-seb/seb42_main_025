import styled, { css } from 'styled-components';
import { ImSearch } from 'react-icons/im';

function InputComponent({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  titleRef,
  type = 'text',
  onKeyPress,
  defaultText,
  onSubmit,
}) {
  return (
    <InputContainer onSubmit={onSubmit}>
      <InputLabel label={label}>{label}</InputLabel>
      <InputWrapper error={error}>
        {placeholder === '태그 검색' ? (
          <IconWrapper>
            <ImSearch />
          </IconWrapper>
        ) : null}
        <InputField
          type={type}
          placeholder={placeholder}
          defaultValue={(value, defaultText)}
          onChange={onChange}
          onBlur={onBlur}
          ref={titleRef}
          onKeyPress={onKeyPress}
        />
      </InputWrapper>
      {error && <ErrorMessage visible={'visible'}>{error}</ErrorMessage>}
    </InputContainer>
  );
}

const InputContainer = styled.form`
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
  height: 2.5rem;
  border-radius: 0.25rem;
  border: 1px solid ${({ error }) => (error ? 'red' : '#cecece')};
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

  ${({ error }) =>
    error &&
    css`
      box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.2);
    `}
`;

const InputField = styled.input`
  border: none;
  width: 100%;
  /* padding-left: 0.5rem;
  color: #ce8e5b; */
  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #c1c1c1;
  }
  background-color: #fff;
`;

const IconWrapper = styled.div`
  display: flex;
  margin-right: 0.5rem;
`;

const ErrorMessage = styled.div`
  font-size: 0.75rem;
  padding-left: 1rem;
  color: red;
`;

export default InputComponent;
