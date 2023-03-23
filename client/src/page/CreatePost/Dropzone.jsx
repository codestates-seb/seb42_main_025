import { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { RxFilePlus, RxCross2, RxCheckCircled } from 'react-icons/rx';

export default function Dropzone() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    acceptedFiles => {
      // 파일 이름으로 중복 체크하여 이미 있는 파일은 제거하기
      const newFiles = acceptedFiles.filter(newFile => {
        const isDuplicate = files.some(
          existingFile => existingFile.name === newFile.name && existingFile.size === newFile.size
        );
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
    // Revoke the data uris to avoid memory leaks
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  const removeFile = name => {
    setFiles(previousFiles => previousFiles.filter(file => file.name !== name));
  };

  const images = files.map((file, idx) => (
    <PhotoRemove key={file.name + idx}>
      <Photo src={file.preview} alt={file.name} />
      <Remove onClick={() => removeFile(file.name)}>
        <RxCross2 size="21" />
      </Remove>
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
    onDrop,
  });
  console.log(images);

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
      </div>
      <ImgBox>
        <PhotoBox>{images}</PhotoBox>
      </ImgBox>
    </Container>
  );
}

const Container = styled.form`
  display: grid;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  border: 1px dotted black;
`;

const Drop = styled.div`
  margin-left: 14px;
  font-weight: 800;
`;

const ImgBox = styled.div`
  display: flex;
  min-height: 470px;
  border: 1px solid black;
`;

const PhotoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 230px;
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
  min-width: 273px;
  max-width: 273px;
  min-height: 217px;
  max-height: 217px;
  margin: 11px 1px 0px 3px;
  object-fit: contain;
  border: 1px solid black;
`;
