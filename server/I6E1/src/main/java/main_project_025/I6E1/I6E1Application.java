package main_project_025.I6E1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class I6E1Application {

	public static void main(String[] args) {
		SpringApplication.run(I6E1Application.class, args);
	}

}
