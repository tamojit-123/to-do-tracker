FROM openjdk:18-ea-11-slim
WORKDIR /manager/lib
ADD ./target/ManagerService-0.0.1-SNAPSHOT.jar /manager/lib/ManagerService-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","ManagerService-0.0.1-SNAPSHOT.jar"]