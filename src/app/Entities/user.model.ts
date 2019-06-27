import { Relationship } from './userrelationship.model';

export class User {
    id: number;
    name: string;
    age: number;
    username: string;
    startdate: Date;
    password: string;
    img:string;
    location:string;
    website?:string;
}
