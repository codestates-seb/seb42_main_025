import { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { RxFilePlus, RxCross2, RxCheckCircled } from 'react-icons/rx';
import { Alert } from '@mui/material';
import { imageProcess } from 'utils/imageProcess';

export function Dropzone({ setIsFiles, defaultImage }) {
  const [files, setFiles] = useState([]);
  const [isBigger, setIsBigger] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const [isDuplication, setIsDuplication] = useState(false);
  const defaultImages = defaultImage ? imageProcess(defaultImage) : [];

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      //파일 개수가 6개 이상일떄 ondrop 중단
      if (files.length > 5) {
        setIsFull(true);
        return;
      } else {
        setIsFull(false);
      }
      if (rejectedFiles.length > 0) {
        setIsBigger(true);
      } else {
        setIsBigger(false);
      }
      // 파일 이름과 사이즈로 중복 체크하여 이미 있는 파일은 제거하기
      const newFiles = acceptedFiles.filter(newFile => {
        const isDuplicate = files.some(
          existingFile => existingFile.name === newFile.name && existingFile.size === newFile.size
        );
        if (isDuplicate) {
          setIsDuplication(true);
        } else {
          setIsDuplication(false);
        }
        return !isDuplicate;
      });

      if (newFiles?.length) {
        setFiles(previousFiles => [
          ...previousFiles,
          ...newFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) })),
        ]);
      }
    },
    [files]
  );

  useEffect(() => {
    // 메모리 누수를 방지하기 위해 데이터 URL을 해지합니
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [setIsFiles]);

  const removeFile = name => {
    setFiles(previousFiles => previousFiles.filter(file => file.name !== name));
  };

  const images = files.map(file => (
    <PhotoRemove key={file.name}>
      <Photo src={file.preview} alt={file.name} />
      <Remove onClick={() => removeFile(file.name)}>
        <RxCross2 size="21" />
      </Remove>
    </PhotoRemove>
  ));

  const editImages = defaultImages.map(item => (
    <PhotoRemove key={item.idx}>
      <Photo src={item.url} alt={item.url} />
    </PhotoRemove>
  ));

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
    },
    maxFiles: 6,
    timeout: 5000,
    addRemoveLinks: true,
    dictRemoveFile: '삭제',
    noDragEventsBubbling: true,
    maxSize: 1024 * 1000,
    onDrop,
  });

  useEffect(() => {
    setIsFiles(files);
  }, [files]);

  return (
    <Container>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <IconBox>
          {isDragActive ? (
            <RxCheckCircled size="100" color="green" />
          ) : (
            <div>
              <RxFilePlus size="100" />
              <Drop>Drop Here</Drop>
            </div>
          )}
        </IconBox>
        {isDuplication && <Alert severity="error">중복된 이미지가 있습니다</Alert>}
        {isFull && <Alert severity="error">이미지는 최대 6개까지만 업로드할 수 있습니다</Alert>}
        {isBigger && <Alert severity="error">이미지의 크기가 너무 큽니다</Alert>}
      </div>
      <ImgBox>
        <PhotoBox>
          {images}
          {editImages}
        </PhotoBox>
      </ImgBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 180px;
  border-radius: 0.25rem;
  border: 1px dotted #ce8e5b;
`;

const Drop = styled.div`
  margin-left: 10px;
  font-weight: 800;
`;

const ImgBox = styled.div`
  display: flex;
  min-height: 450px;
  /* width: fit-content; */
  border: 1px solid #ce8e5b;
  border-radius: 0.25rem;
  overflow: auto;
  margin-top: 30px;
`;

const PhotoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 230px;
  width: available;
`;

const PhotoRemove = styled.div`
  display: flex;
`;

const Remove = styled.button`
  width: 25px;
  height: 25px;
  margin: 1px 0px 0px -20px;
  padding: 2px 0px 0px 0.5px;
  border-radius: 50px;
  border: none;
  background-color: #ddba9d;
  color: white;
`;

const Photo = styled.img`
  min-width: 245px;
  max-width: 245px;
  min-height: 208px;
  max-height: 208px;
  margin: 10px 0px 5px 10px;
  object-fit: contain;
  border: 1px solid black;
  border-radius: 0.25rem;
`;
