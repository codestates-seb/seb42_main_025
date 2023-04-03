import styled from 'styled-components';

function TagComponent({ text, createTag, deleteTagItem, handleClickTag }) {
  return (
    <StyledContainer onClick={createTag ? null : handleClickTag}>
      <StyledTag>{text}</StyledTag>
      {createTag && <StyledButton onClick={deleteTagItem}>X</StyledButton>}
    </StyledContainer>
  );
}

const StyledContainer = styled.button`
  display: flex;
  height: fit-content;
  width: fit-content;
  padding: 0.1rem 0.25rem;
  margin: 0.25rem;
  border-radius: 0.25rem;
  border: 2px solid #cccccc;
  font-size: 1rem;
  font-weight: bold;
  color: #606060;
  background-color: transparent;
  white-space: nowrap;
  gap: 0.25rem;

  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(70%);
    transform: translate(0, 1px);
  }
`;

const StyledTag = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  padding-bottom: 0.6px;
  border-radius: 50px;
  border: none;
  background-color: #ddba9d;
  color: white;
`;

export default TagComponent;
