FROM openjdk:18-ea-11-slim
WORKDIR /archive/lib
ADD ./target/ArchiveService-0.0.1-SNAPSHOT.jar archive/lib/ArchiveService-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","ArchiveService-0.0.1-SNAPSHOT.jar"]