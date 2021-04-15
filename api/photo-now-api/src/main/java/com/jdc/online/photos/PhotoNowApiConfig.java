package com.jdc.online.photos;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.jdc.online.photos.domain.BaseRepositoryImpl;

@Configuration
@EnableWebMvc
@EnableJpaRepositories(repositoryBaseClass = BaseRepositoryImpl.class)
public class PhotoNowApiConfig  implements WebMvcConfigurer {
	
	@Value("${app.image.location}")
	private String imagePath;

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
			.allowedOrigins("*").allowedMethods("*");
	}
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/image/**").addResourceLocations(String.format("file:%s/", imagePath));
	}

}
