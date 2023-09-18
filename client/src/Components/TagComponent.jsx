import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function TagComponent({ tags, deleteTagItem, varient, where }) {
  const [isHovered, setIsHovered] = useState(null);

  const navigate = useNavigate();

  const handleClickTag = e => {
    e.stopPropagation();
    const tag = e.target.innerText;
    navigate(`/search/${tag}`);
  };

  const handleHover = idx => {
    setIsHovered(idx);
  };

  const handleLeave = () => {
    setIsHovered(null);
  };

  return (
    <StyledTagContainer where={where}>
      {tags.map((el, idx) => (
        <div key={el}>
          {varient === 'div' ? (
            <StyledButton
              as={varient}
              onMouseEnter={() => handleHover(idx)}
              onMouseLeave={handleLeave}
            >
              {el}
              <StyledDelete
                onClick={e => {
                  deleteTagItem(e);
                  handleLeave();
                }}
                id={el}
                hidden={idx === isHovered}
              >
                X
              </StyledDelete>
            </StyledButton>
          ) : varient === 'span' ? (
            <StyledButton as={varient}>{el}</StyledButton>
          ) : (
            <StyledContainer onClick={handleClickTag}>{el}</StyledContainer>
          )}
        </div>
      ))}
    </StyledTagContainer>
  );
}

const StyledTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${props => (props.where === 'creat' ? '0.5rem' : 'none')};
  height: ${props => (props.where === 'post' || props.where === 'creat' ? 'none' : '1.5rem')};
  gap: 0.5rem 0.25rem;
  overflow: ${props => (props.where === 'list' ? 'hidden' : 'none')};
`;

const StyledButton = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0.1rem 0.25rem 0.2rem 0.25rem;
  border-radius: 0.25rem;
  border: 1px solid #cccccc;
  font-size: 0.75rem;
  font-weight: bold;
  color: #666666;
  background-color: #fff;
  white-space: nowrap;
`;

const StyledContainer = styled(StyledButton)`
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(70%);
    transform: translate(0, 1px);
  }
`;

const StyledDelete = styled.button`
  display: ${({ hidden }) => (hidden ? 'flex' : 'none')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  color: red;
  justify-content: center;
  border-radius: 1rem;
  border: none;
  background-color: transparent;
  z-index: 10;

  cursor: pointer;
`;

export default TagComponent;
