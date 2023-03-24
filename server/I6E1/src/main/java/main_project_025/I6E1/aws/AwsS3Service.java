package main_project_025.I6E1.aws;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AwsS3Service {

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    private final AmazonS3 amazonS3;

    public List<String> uploadImage(List<MultipartFile> multipartFile) {//multipartFile 인터페이스 사용해 업로드
        List<String> fileUrlList = new ArrayList<>();//여러개의 파일을 업로드 할 수 있기때문에 리스트 이용

        multipartFile.forEach(file -> {//forEach 메소드를 사용해 multipartFile에 담긴 파일을 하나씩 처리
            String fileName = createFileName(file.getOriginalFilename());//UUID를 통해 랜덤한 id를 생성, concat을 통해 확장자 명을 붙여줘 고유한 파일 이름 생성
            ObjectMetadata objectMetadata = new ObjectMetadata();//ObjectMetadata 객체를 생성
            objectMetadata.setContentLength(file.getSize());//파일의 크기 설정
            objectMetadata.setContentType(file.getContentType());//MIME 타입 정보 설정

            try(InputStream inputStream = file.getInputStream()) {//inputStream은 바이트 단위로 데이터를 읽어들이는 스트림으로, getInputStream() 메소드를 통해 file의 내용을 읽어들인다.
                amazonS3.putObject(new PutObjectRequest(bucket, fileName, inputStream, objectMetadata)//PutObjectRequest 객체를 생성하여 '업로드할 bucket', '업로드할 fileName', '업로드할 파일 내용', '메타데이터' 설정 후 putObject()를 통해 버킷에 파일 업로드를 한다.
                        .withCannedAcl(CannedAccessControlList.PublicRead));//withCannedAcl()메서드를 사용 해 S3에서 해당 파일에 대한 공개 권한 설정,여기선 공개적으로 접근하도록 설정
            } catch(IOException e) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "이미지 업로드에 실패했습니다.");
            }
            String urlPath = new StringBuilder("http://seungbaelee.s3.ap-northeast-2.amazonaws.com/").append(fileName).toString();
            fileUrlList.add(urlPath);
        });
        return fileUrlList;//리스트 반환!
    }

    public List<String> uploadThumbnail(List<MultipartFile> multipartFile) {//multipartFile 인터페이스 사용해 업로드
        List<String> fileUrlList = new ArrayList<>();//여러개의 파일을 업로드 할 수 있기때문에 리스트 이용

        multipartFile.forEach(file -> {//forEach 메소드를 사용해 multipartFile에 담긴 파일을 하나씩 처리
            String fileName = createFileName(file.getOriginalFilename());//UUID를 통해 랜덤한 id를 생성, concat을 통해 확장자 명을 붙여줘 고유한 파일 이름 생성
            ObjectMetadata objectMetadata = new ObjectMetadata();//ObjectMetadata 객체를 생성
            objectMetadata.setContentLength(file.getSize());//파일의 크기 설정
            objectMetadata.setContentType(file.getContentType());//MIME 타입 정보 설정

            try(InputStream inputStream = file.getInputStream()) {//inputStream은 바이트 단위로 데이터를 읽어들이는 스트림으로, getInputStream() 메소드를 통해 file의 내용을 읽어들인다.
                amazonS3.putObject(new PutObjectRequest(bucket, fileName, inputStream, objectMetadata)//PutObjectRequest 객체를 생성하여 '업로드할 bucket', '업로드할 fileName', '업로드할 파일 내용', '메타데이터' 설정 후 putObject()를 통해 버킷에 파일 업로드를 한다.
                        .withCannedAcl(CannedAccessControlList.PublicRead));//withCannedAcl()메서드를 사용 해 S3에서 해당 파일에 대한 공개 권한 설정,여기선 공개적으로 접근하도록 설정
            } catch(IOException e) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "이미지 업로드에 실패했습니다.");
            }
            String urlPath = new StringBuilder("http://seungbaelee-resize.s3.ap-northeast-2.amazonaws.com/").append(fileName).toString();
            String urlPath2 = new StringBuilder("http://seungbaelee.s3.ap-northeast-2.amazonaws.com/").append(fileName).toString();
            fileUrlList.add(urlPath);
            fileUrlList.add(urlPath2);
        });
        return fileUrlList;//리스트 반환!
    }

    public void deleteImage(String fileName) {
        amazonS3.deleteObject(new DeleteObjectRequest(bucket, fileName));
        //deleteObject() = S3 버킷에 있는 fileName을 삭제
        //DeleteObjectRequest() = 삭제하려는 객체의 위치를 식별하는 메소드
    }

    private String createFileName(String fileName) {
        return UUID.randomUUID().toString().concat(getFileExtension(fileName));
        //UUID를 통해 랜덤한 id를 생성, concat을 통해 확장자 명을 붙여준다.
    }

    private String getFileExtension(String fileName) {
        try {
            return fileName.substring(fileName.lastIndexOf("."));//lastIndexOf(".")호출 시 파일 이름의 '.' 문자의 인덱스 반환,즉 substring()으로 인해 '.' 문자를 포함한 문자열의 끝부분부터 끝까지 추출
            //ex) test.txt의 경우 fileName.substring(5)가 되고 ".txt"를 반환
        } catch (StringIndexOutOfBoundsException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "잘못된 형식의 파일 (" + fileName + ") 입니다.");
        }
    }
}