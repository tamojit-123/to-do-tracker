FROM openjdk:11-jre-slim
WORKDIR usr/src
# ENV MONGO_URI=mongodb://localhost:27017/movie_db
ADD ./target/ImageService-0.0.1-SNAPSHOT.jar /usr/src/ImageService-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","ImageService-0.0.1-SNAPSHOT.jar"]