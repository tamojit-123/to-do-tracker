package com.todo.gateway.config;

import com.todo.gateway.filter.JwtFilter;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfiguration {
    
    @Bean
    public RouteLocator routeLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                        .route(p -> p.path("/authentication/api/v1/**").uri("http://localhost:8081/"))
                        .route(p -> p.path("/task-manager/api/v1/**").uri("http://localhost:8082/"))
                        .route(p -> p.path("/task-reminder/api/v1/**").uri("http://localhost:8083/"))
                        .route(p -> p.path("/task-archive/api/v1/**").uri("http://localhost:8084/"))
                        .build();
    }

    @Bean
    public FilterRegistrationBean filterRegistrationBean() {

        FilterRegistrationBean frb = new FilterRegistrationBean<>();

        frb.setFilter(new JwtFilter());
        
        frb.addUrlPatterns("/task-manager/api/v1/user/*", "/task-reminder/api/v1/user/*", "/task-archive/api/v1/user/*");
        return frb;
    }
}