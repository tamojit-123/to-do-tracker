FROM openjdk:18-ea-11-slim
WORKDIR /usr/lib
ADD ./target/GatewayService-0.0.1-SNAPSHOT.jar /usr/lib/GatewayService-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "GatewayService-0.0.1-SNAPSHOT.jar"]