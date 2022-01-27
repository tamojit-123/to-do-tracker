FROM openjdk:18-ea-11-slim
WORKDIR /eureka/lib
ADD ./target/EurekaServer-0.0.1-SNAPSHOT.jar /eureka/lib/EurekaServer-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "EurekaServer-0.0.1-SNAPSHOT.jar"]