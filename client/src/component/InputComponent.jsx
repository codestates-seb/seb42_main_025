import styled from 'styled-components';

const InputLabel = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #ddba9d;
`;

const InputField = styled.input`
  width: 320px;
  height: 23px;
  padding: 8px;
  border: 1px solid #ddba9d;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #ddba9d;
    outline: none;
    box-shadow: 0 0 0 2px #ddba9d;
  }

  ::placeholder {
    color: #c1c1c1;
  }
`;

const ErrorMessage = styled.div`
  display: block;
  font-size: 12px;
  color: red;
  position: relative;
  bottom: 5px;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 8px;
  margin-bottom: 16px;
  height: 70px;
`;

const InputComponent = ({ label, placeholder, value, onChange, onBlur, error, type = 'text' }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default InputComponent;
