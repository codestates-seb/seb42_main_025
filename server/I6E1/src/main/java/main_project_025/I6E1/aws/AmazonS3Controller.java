package main_project_025.I6E1.aws;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/s3")
public class AmazonS3Controller {

    private final AwsS3Service awsS3Service;

    @ApiOperation(value = "Amazon S3에 이미지 업로드", notes = "Amazon S3에 이미지 업로드 ")//API에 대한 설명을 추가할 때 사용(value 속성은 API에 대한 간단한 설명, notes 속성은 API에 대한 상세한 설명)
    @PostMapping("/image")//업로드 시 PostMapping을 사용하여 업로드
    public ResponseEntity<List<String>> uploadImage(@ApiParam(value="img 파일들(여러 파일 업로드 가능)", required = true) @RequestPart List<MultipartFile> multipartFile) {//@RequestPart는 멀티파트 요청에서 파일 데이터를 읽어올 때 사용
        return ApiResponse.success(awsS3Service.uploadImage(multipartFile));//ApiResponse.success 메서드는 API 요청을 성공적으로 처리한 경우, ResponseEntity 객체를 반환하고 이 리스트를 클라이언트에게 응답
    }//url path 반환할 수 있도록 수정

    @ApiOperation(value = "Amazon S3에 업로드 된 파일을 삭제", notes = "Amazon S3에 업로드된 이미지 삭제")
    @DeleteMapping("/image")
    public ResponseEntity<Void> deleteImage(@ApiParam(value="img 파일 하나 삭제", required = true) @RequestParam String fileName) {
        awsS3Service.deleteImage(fileName);
        return ApiResponse.success(null);
    }
}
