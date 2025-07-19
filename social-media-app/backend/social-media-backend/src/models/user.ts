import mongoose, { Document, Model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the IUser interface that extends the mongoose Document interface
export interface IUser extends Document {
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;


  comparePassword(candidatePassword: string): Promise<boolean>;
}

// Define the UserModel interface that extends the mongoose Model interface
// to include the findByEmail method
export interface IUserModel extends Model<IUser> {
  findByEmail(email: string): Promise<IUser | null>;
}

// Define the userSchema with the IUser interface
const userSchema: Schema<IUser> = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

// Add the findByEmail static method to the userSchema
userSchema.statics.findByEmail = async function (email: string): Promise<IUser | null> {
  return this.findOne({ email });
};

// Add the comparePassword instance method to the userSchema
userSchema.methods.comparePassword = async function (
  this: IUser,
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Create the User model with the extended IUserModel interface
const User: IUserModel = mongoose.model<IUser, IUserModel>('User', userSchema);

// Export the User model
export default User;
