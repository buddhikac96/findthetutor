export class TutorPrfile{
    first_name: string;
    last_name: string;
    emial: string;
    mobile: string;
    subjects: string[];
    locations: string[];

    reviews: Review[];
    performances: Performance[];
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

