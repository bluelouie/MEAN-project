export class Task {
    title        : string;
    createdDate  : string;
    isDone       : boolean;
    userId       : string;
    description? : string;

    constructor(title: string, createdDate : string, isDone: boolean, userId : string, description? : string ) {
        this.title = title;
        this.createdDate = createdDate;
        this.isDone = isDone;
        this.userId = userId;
        this.description = description;
    }
}
