import { Module } from "./module.model";

export class Studyplan{
    _id: String = '';
    name: String = '';
    details: String = '';
    modules: Module[] = [];
}