package main_project_025.I6E1.aws;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AwsS3Config {
    @Value("${cloud.aws.credentials.access-key}")
    private String accessKey;

    @Value("${cloud.aws.credentials.secret-key}")
    private String secretKey;

    @Value("${cloud.aws.region.static}")
    private String region;

    @Bean
    public AmazonS3Client amazonS3Client() {//AWS S3 서비스와 상호작용할 수 있는 클라이언트 객체
        BasicAWSCredentials awsCreds = new BasicAWSCredentials(accessKey, secretKey);//accessKey와 secretKey를 사용하여 AWS 인증정보 생성 -> AWS S3 서비스에 연결할 때 사용
        return (AmazonS3Client) AmazonS3ClientBuilder.standard()//AmazonS3ClientBuilder를 통해 AWS S3 클라이언트 객체를 생성한다.
                .withRegion(region)//클라이언트 객체가 사용할 AWS 지역 설정
                .withCredentials(new AWSStaticCredentialsProvider(awsCreds))//AWS 인증 정보를 설정
                .build();//클라이언트 객체 생성하고 반환
    }
}
