export class TutorPrfile{
    first_name: string;
    last_name: string;
    email: string;
    mobile: string;
    location: string;
    subjects: string[];

    reviews: Review[];
    performances: Performance[];

    constructor(fname, lname, email, mobile,location){
        this.first_name = fname;
        this.last_name = lname;
        this.email = email;
        this.mobile = mobile;
        this.location = location;
    }
}

class Review{
    studentId: string;
    review: string;
    timeStamp: Date
}

class Performance{
    student_name: string;
    talent: string;
    img_url: string;
}

