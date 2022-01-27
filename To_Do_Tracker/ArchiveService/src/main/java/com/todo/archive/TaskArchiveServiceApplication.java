package com.todo.archive;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
 @EnableEurekaClient
public class TaskArchiveServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskArchiveServiceApplication.class, args);
	}

}
