import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  age: number;

  @Prop({ required: true })
  phone: string;

  @Prop()
  city: string;

  @Prop()
  country: string;

  @Prop()
  address: string;
  
  @Prop()
  dateOfBirth: string;

  @Prop()
  postalCode: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);