export class TutorProfileModule{
    firstName: String;
    lastName: String;
    mobile: String;
    email: String;
    location: String;
    subject: String;
    available: String;
    price: String;
    time: String;

    constructor(p){
        this.firstName = p.fname;
        this.lastName = p.lname;
        this.mobile = p.mobile;
        this.location = p.location;
        this.subject = p.subject;
        this.price = p.price;
        this.price = p.available;
        this.email = p.email;
        this.time = p.time;
    }
}