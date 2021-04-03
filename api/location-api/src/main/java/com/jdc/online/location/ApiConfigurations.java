package com.jdc.online.location;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.jdc.online.location.repo.BaseRepositoryImpl;

@Configuration
@EnableWebMvc
@EnableJpaRepositories(repositoryBaseClass = BaseRepositoryImpl.class)
public class ApiConfigurations implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
			.allowedOrigins("*").allowedMethods("*");
	}

}
