import { Subject } from "./subject.model";

export class Module {
    _id : String = '';
    name: String = ''
    detail: String = ''
    subjects: Subject[] = [];
}