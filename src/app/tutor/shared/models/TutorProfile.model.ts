export class TutorProfile{
    fname: string;
    lname: string;
    mobile: string;
    location: string;
    subject: string;
    rate: string;
    imgUrl: string;

    reviews: Review[];
}

class Review{
    date: string;
    studentName: string;
    content: string;
    studentImgUrl: string;
}
