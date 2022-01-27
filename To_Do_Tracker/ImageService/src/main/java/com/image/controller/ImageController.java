package com.image.controller;

import java.util.List;
import java.util.stream.Collectors;

import com.image.model.Image;
import com.image.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;


import com.image.upload.message.Response;

@Controller
@CrossOrigin("*")
public class ImageController {

  @Autowired
  ImageService imageService;

  @PostMapping("/upload")
  public ResponseEntity<Response> uploadImage(@RequestParam("file") MultipartFile file) {
    String message = "";
    try {
      imageService.save(file);

      message = "File successfully uploaded: " + file.getOriginalFilename();
      return ResponseEntity.status(HttpStatus.OK).body(new Response(message));
    } catch (Exception e) {
    	//System.out.println(e);
    	//System.out.println(e);
      message = "Could not upload the file: " + file.getOriginalFilename() + "!" ;
      return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new Response(message));
    }
  }

  @GetMapping("/files")
  public ResponseEntity<List<Image>> getListFiles() {
    List<Image> fileInfos = imageService.loadAll().map(path -> {
      String filename = path.getFileName().toString();
      String url = MvcUriComponentsBuilder
          .fromMethodName(ImageController.class, "getImage", path.getFileName().toString()).build().toString();

      return new Image(filename, url);
    }).collect(Collectors.toList());

    return ResponseEntity.status(HttpStatus.OK).body(fileInfos);
  }

  @GetMapping("/files/{filename:.+}")
  public ResponseEntity<Resource> getImage(@PathVariable String filename) {
    Resource file = imageService.load(filename);
    return ResponseEntity.ok()
        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
  }
}
