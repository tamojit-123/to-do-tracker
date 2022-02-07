# To-Do Tracker
Todo Tracker application allows user to add todo, assign categories to them and set reminders.

##### The Objective of this TodoTracker application is to cover the following :  
- Allows user to add todo
- Edit, catagorize, organize, and mark as complete
- Get reminded about self-imposed deadlines.
- Offers user fiendly interface
- List the archived tasks as and when required.


<h4 align="left">Framework used:</h4>
<p align="left"> <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/> Angular </a> For Frontend</p>

<p align="left"> <a href="https://spring.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/>  SpringBoot</a> For Backend</p>

<h3 align="left">Databse used:</h3>
<p align="left"> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> MongoDB</a> </p>

<p align="left"> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> MySQL</a> </p>



##### File structure:

    todotracker
	    |
	    ├── FrontEnd                                          // This is the frontend Angular appliaction
	    ├── To_Do_Tracker                                     // This is the backend spring boot application  
	    ├── LICENSE
	    └── README 			                   


## Architecture Diagram
![Todo Architecture Diagram](https://user-images.githubusercontent.com/40804626/152829413-70ea301a-dda0-4142-98f8-1324b2c8a7c5.png)

## Flow Diagram
![todo](https://user-images.githubusercontent.com/40804626/152660598-4983aa68-7394-4724-9318-1ce95898fc77.png)


## To run the backend Application

- Clone the repository 

```shell
cd To_Do_Tracker
```

-  Do ```mvn clean install``` inside the backend folder Springboot application to generate target folder or .jar file.

- You can Run the backend using Docker in ```Ubuntu``` or using service in intelij or run using STS 4.

- ##### To run using docker follow this command (more information inside backend README)

```shell
sudo docker-compose up --build
```

## To run the forntend Application

```shell
cd FrontEnd
```
- To run the fornt end application you need nodejs install in your system and intall Angular CLI.

- Do ```npm install``` inside the frontend application to install application dependencies.
- Then run ```ng serve --open``` to run the angular server https://localhost:4200
