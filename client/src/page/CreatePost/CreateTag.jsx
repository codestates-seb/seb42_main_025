import { useState } from 'react';
import InputComponent from 'component/InputComponent';
import TagComponent from 'component/TagComponent';
import styled from 'styled-components';
import { Alert } from '@mui/material';

function CreateTag() {
  const [tagItem, setTagItem] = useState('');
  const [tagList, setTagList] = useState([]);
  const [isDuplication, setIsDuplication] = useState(false);

  const onKeyPress = e => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      submitTagItem();
      console.log(tagItem);
    }
  };

  const submitTagItem = () => {
    if (tagList.includes(tagItem)) {
      setIsDuplication(true);
      return;
    } else if (!tagList.includes(tagItem)) {
      setIsDuplication(false);
    }
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem('');
  };

  const deleteTagItem = e => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter(tagItem => tagItem !== deleteTagItem);
    setTagList(filteredTagList);
  };

  console.log(tagList);

  return (
    <div>
      <InputComponent
        label="태그"
        placeholder="태그를 입력하세요."
        onChange={e => setTagItem(e.target.value)}
        onKeyPress={onKeyPress}
        value={tagItem}
      />
      {isDuplication && <Alert severity="error">이미 사용된 태그입니다!</Alert>}
      <TagContainer>
        {tagList &&
          tagList.map(tag => {
            return (
              <div key={tag}>
                <TagComponent text={tag} createTag="createTag" deleteTagItem={deleteTagItem} />
              </div>
            );
          })}
      </TagContainer>
    </div>
  );
}

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default CreateTag;
