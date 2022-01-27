export class Task {
    taskID!: number;
    taskHeading:string;
    taskContent:string;
    dueDate:string;
    priorityLevel:string;
    category:string;
    completed : boolean =false;
    imageUrl: string;

    constructor(taskID: number, taskHeading : string, taskContent:string, dueDate:string, priorityLevel:string, category:string, imageUrl:string)
    {
       this.taskID = taskID;
        this.taskHeading=taskHeading;
        this.taskContent=taskContent;
        this.dueDate=dueDate;
        this.priorityLevel=priorityLevel;
        this.category = category;
        this.imageUrl=imageUrl;
    }

 }
