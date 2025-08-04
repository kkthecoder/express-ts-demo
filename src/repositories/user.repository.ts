import { User } from "../models/user.model";
import { CreateUserDto, UpdateUserDto } from "../validators/user.validator";

/**
 * UserRepository handles data access logic for User model.
 */
export default class UserRepository {
  /**
   * Create a new user.
   * @param {CreateUserDto} userData - Data for the new user.
   */
  createUser(userData: CreateUserDto) {
    const user = new User(userData);
    return user.save();
  }

  /**
   * Find a user by ID.
   * @param {string} id - The ID of the user to find.
   */
  findUserById(id: string) {
    return User.findById(id);
  }

  /**
   * Update a user by ID.
   * @param {string} id - The ID of the user to update.
   * @param {UpdateUserDto} updateData - The data to update.
   */
  updateUserById(id: string, updateData: UpdateUserDto) {
    return User.findByIdAndUpdate(id, updateData, { new: true });
  }

  /**
   * Delete a user by ID.
   * @param {string} id - The ID of the user to delete.
   */
  deleteUserById(id: string) {
    return User.findByIdAndDelete(id);
  }

  /**
   * Find all users.
   */
  findAllUsers() {
    return User.find();
  }
}
/* 
export const getAllUsers = () => User.find();

export const getUserById = (id: string) => User.findById(id);

export const createUser = (data: CreateUserDto) => User.create(data);

export const updateUser = (id: string, data: UpdateUserDto) =>
  User.findByIdAndUpdate(id, data, { new: true });

export const deleteUser = (id: string) => User.findByIdAndDelete(id);
 */
