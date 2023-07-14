/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'
import bcrypt from 'bcrypt'
import config from '../../../config';

const UserSchema = new Schema<IUser, UserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique : true
    },
    password: {
      type: String,
      required: true,
      select: 0,
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

UserSchema.pre('save', async function (next) {
    
    const user = this;
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bycrypt_salt_rounds)
    );
  
    next();
  });

export const User = model<IUser, UserModel>('User', UserSchema)