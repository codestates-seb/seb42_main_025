import styled from 'styled-components';

const InputLabel = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
`;

const InputField = styled.input`
  width: 228px;
  height: 23px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
  position: relative;
  top: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  height: 80px;
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
