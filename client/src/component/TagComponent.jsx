import styled from 'styled-components';

function TagComponent({ text }) {
  return <StyledTag>{text}</StyledTag>;
}

const StyledTag = styled.div`
  height: fit-content;
  width: fit-content;
  padding: 0.1rem 0.25rem;
  margin: 0.25rem;
  border-radius: 0.25rem;
  border: 2px solid #cccccc;
  font-size: 0.75rem;
  font-weight: bold;
  color: #606060;
  white-space: nowrap;
`;

export default TagComponent;
