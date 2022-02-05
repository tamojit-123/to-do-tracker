FROM openjdk:18-ea-11-slim
WORKDIR /authentication/lib
ADD ./target/AuthenticationService-0.0.1-SNAPSHOT.jar /authentication/lib/AuthenticationService-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "AuthenticationService-0.0.1-SNAPSHOT.jar"]