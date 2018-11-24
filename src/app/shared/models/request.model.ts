export class TutorRequest{
    location: String;
    subject: String;
    day: String;
    tutor: String;
    student: String;

    constructor(location: String, subject: String, day: String, tutor: String, student: String){
        this.tutor = tutor;
        this.student = student;
        this.location = location;
        this.subject = subject;
        this.day = day;
    }
}