import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(CreateUserDto);
    return createdUser.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(id: ObjectId): Promise<User> {
    return this.userModel.findOne({_id : id}).exec();
  }

  update(id: ObjectId, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({_id : id}, {'$set' : updateUserDto}).exec();
  }

  remove(id: ObjectId) {
    return this.userModel.deleteOne({_id : id}).exec();
  }
}
