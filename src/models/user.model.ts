import { Certificate } from "./certificate.model";
import { Studyplan } from "./studyplan.model";

export class User {
    _id: string = '';
    name: string = '';
    email: string = '';
    birthday: Date = new Date;
    password: string = '';
    certificates: Certificate[] = [];
    studyplans: Studyplan[] = [];
  }