import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { RxFilePlus } from 'react-icons/rx';

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

  const images = files.map(file => <Photo key={file.name} src={file.preview} alt="images" />);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop,
  });
  console.log(images);
  return (
    <Container>
      <Content {...getRootProps()}>
        <input {...getInputProps()} />
        {images.length < 1 ? (
          <IconBox>
            <Icon>
              <RxFilePlus size="100" />
            </Icon>
          </IconBox>
        ) : (
          <ImgBox>
            <PhotoBox>{images}</PhotoBox>
          </ImgBox>
        )}
        {/* <ImgBox>
          <PhotoBox>{images}</PhotoBox>
        </ImgBox> */}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Icon = styled.div`
  display: flex;
`;

const ImgBox = styled.div`
  display: flex;
`;

const PhotoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Photo = styled.img`
  min-width: 278px;
  max-width: 278px;
  min-height: 217px;
  max-height: 217px;
  padding: 1rem;
  margin: 4rem 0px 4rem 4px;
  object-fit: cover;
  border: 1px solid lightgray;
`;

export default Dropzone;
