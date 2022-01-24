package com.todo.gateway.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.filter.GenericFilterBean;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

public class JwtFilter extends GenericFilterBean {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
            throws IOException, ServletException {

        final HttpServletRequest request = (HttpServletRequest) servletRequest;
        final HttpServletResponse response = (HttpServletResponse) servletResponse;

        final String authHeader = request.getHeader("Authorization");

        if (request.getMethod().equals("OPTIONS")) {
            response.setStatus(HttpServletResponse.SC_OK);
            filterChain.doFilter(request, response);

        }
        else if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                throw new ServletException("Missing or Invalid Authorization Token!");
            }
            String bearerToken = authHeader.substring(7);
            Claims claims = Jwts.parser().setSigningKey("user@123").parseClaimsJws(bearerToken).getBody();
            request.setAttribute("claims", claims);
            filterChain.doFilter(request, response);

    }
    
}
