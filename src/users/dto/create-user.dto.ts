import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsPhoneNumber, IsPostalCode } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    age: number;

    @IsPhoneNumber()
    phone: string;

    city: string;

    @IsNotEmpty()
    country: string;

    @IsPostalCode()
    postalCode: string;

    @IsNotEmpty()
    address: string;

    @IsDateString()
    dateOfBirth:string
}
