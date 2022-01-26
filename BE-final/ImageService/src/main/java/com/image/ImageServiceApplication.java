package com.image;

import javax.annotation.Resource;

import com.image.service.ImageService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@SpringBootApplication
@EnableEurekaClient
public class ImageServiceApplication implements CommandLineRunner {
  @Resource
  ImageService imageService;

  public static void main(String[] args) {
    SpringApplication.run(ImageServiceApplication.class, args);
  }


  @Override
  public void run(String... arg) throws Exception {
    imageService.deleteAll();
    imageService.init();
  }
}
