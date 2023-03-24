package main_project_025.I6E1.aws;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/s3")
public class AwsS3Controller {
    private final AwsS3Service awsS3Service;


    @PostMapping("/image")//업로드 시 PostMapping을 사용하여 업로드
    public ResponseEntity<List<String>> uploadImage(@RequestPart List<MultipartFile> multipartFile) {//@RequestPart는 멀티파트 요청에서 파일 데이터를 읽어올 때 사용
        return ResponseEntity.ok(awsS3Service.uploadImage(multipartFile));//ApiResponse.success 메서드는 API 요청을 성공적으로 처리한 경우, ResponseEntity 객체를 반환하고 이 리스트를 클라이언트에게 응답
    }

    @PostMapping("/thumbnail")//업로드 시 PostMapping을 사용하여 업로드
    public ResponseEntity<List<String>> uploadThumbnail(@RequestPart List<MultipartFile> multipartFile) {//@RequestPart는 멀티파트 요청에서 파일 데이터를 읽어올 때 사용
        return ResponseEntity.ok(awsS3Service.uploadThumbnail(multipartFile));//ApiResponse.success 메서드는 API 요청을 성공적으로 처리한 경우, ResponseEntity 객체를 반환하고 이 리스트를 클라이언트에게 응답
    }

    @DeleteMapping("/image")
    public ResponseEntity<Void> deleteImage(@RequestParam String fileName) {
        awsS3Service.deleteImage(fileName);
        return ResponseEntity.ok(null);
    }
}