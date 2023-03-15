import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
// import { RxFilePlus } from 'react-icons/rx';

function Dropzone() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles?.length) {
      setFiles(previousFiles => [
        ...previousFiles,
        ...acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) })),
      ]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop,
  });

  const images = files.map(file => <Photo key={file.name} src={file.preview} alt="images" />);

  return (
    <Container>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? <p>hello</p> : <p>Drag and drop Drag and dropDrag and dropDrag and drop</p>}
        <ImgBox>
          <PhotoBox>{images}</PhotoBox>
        </ImgBox>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-column: 1 / span 8; // 한 칸이상으로 그리드가 뚫리면 그 이상으로 공간 먹는거 고치는 법 물어보기
  grid-row: 1 / span 1;
  grid-template-columns: minmax(92px);
`;

const ImgBox = styled.div`
  flex-wrap: wrap;
`;

const PhotoBox = styled.div`
  display: flex;
`;

const Photo = styled.img`
  max-width: 150px;
  max-height: 150px;
  object-fit: cover;
`;

export default Dropzone;
