package com.jdc.online.photos.domain.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
public class ImageSaveService {

	@Value("${app.image.location}")
	private String folder;
	
	public String saveImage(MultipartFile file) {
		
		if(null != file) {
			
			try {
				String name = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd-HHmmss-SSS")).concat(".png");
				Path path = Paths.get(folder, name);
				Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
				return name;
			} catch (Exception e) {
				e.printStackTrace();
			}			
		}
		
		return null;
	}
}
