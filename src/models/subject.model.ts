export class Subject {
    _id : String = '';
    academyCodes : String[] = [];
    name: String = '';
    studyPoints: Number = 0;
    details : String = '';
    environment : String = '';

    constructor(_id: String, academyCodes: String[], name: String, studyPoints: number, details: String, environment: String){
        this._id = _id;
        this.academyCodes = academyCodes;
        this.name = name;
        this.studyPoints = studyPoints;
        this.details = details;
        this.environment = environment;
    }
}