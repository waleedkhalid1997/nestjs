import { Exclude, Expose } from "class-transformer";
import { ObjectId } from "mongoose";

export class User {
    _id: ObjectId;
    firstName: string;
    lastName: string;
    age: number;
    phone: string;
    city: string;
    country: string;
    address: string;
    dateOfBirth: string;
    postalCode: string;
    email: string;
  
    @Exclude()
    password: string;

    @Expose()
    get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
    }

}
