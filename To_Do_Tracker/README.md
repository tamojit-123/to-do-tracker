# SpringBoot Application - TO DO Tracker

### Application Description

In this spring boot appliaction we implement different technologies to run the microservices, we used JWT (JSON Web Token) for token based authentication, used netflix eureka for service discovery and to check which service is up and running, used feign client for syncronous commumication with service and used rabbitmq for asyncronous communication among the service. Used MySql to store authenticated user and Used MongoDB for storing the user data. Used Docker to contanarize the backend appliaction.

<h3 align="left">Technology and Tools:</h3>
<p align="left"> <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://www.rabbitmq.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg" alt="rabbitMQ" width="40" height="40"/> </a> <a href="https://spring.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/> </a> </p>

In this project, we created six service. 
    
        1. ArchiveService
        2. AuthenticationService
        3. EurekaServer
        4. GatewayService
        5. NotificationService
        6. TODOService

### Project structure

    To_Do_Tracker
	    |
	    ├── ArchiveService
	    ├── AuthenticationService
	    ├── EurekaServer
	    ├── GatewayService
	    ├── NotificationService
        ├── TODOService
        ├── LICENSE
        ├── README.md
        ├── docker-compose.yml
	    ├── mvnw
	    ├── mvnw.cmd   			                   
	    └── pom.xml


### Steps to be followed while running using docker <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> [Ubuntu]:

1. Do ```mvn clean install``` inside the To_Do_Tracker Springboot application to generate target folder or .jar file.
2. While running ```mvn clean install``` the mongodb and the mysql service need to be running.
3. Pull mongo docker image using ```sudo docker pull mongo``` command.
4. Open a seperate terminal then Pull RabbitMQ image using docker command and keep it running in the terminal.

```BASH
sudo docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.8.23-management
```
5. check RabbitMQ is running using browser by typing http://localhost:15672 [user name : guest & password : guest].
6. To run the application use this command in the terminal.

```BASH
sudo docker-compose up --build
```
7. Open a terminal and check the status of image and containers using ```sudo docker ps -a``` command.
8. And check in eureka server by typing http://localhost:8761 which service is up and running.
9. You can use postman to populate the data.

