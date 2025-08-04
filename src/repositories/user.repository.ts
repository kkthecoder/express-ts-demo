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
  async createUser(userData: CreateUserDto) {
    const user = new User(userData);
    return await user.save();
  }

  /**
   * Find a user by ID.
   * @param {string} id - The ID of the user to find.
   */
  async findUserById(id: string) {
    return await User.findById(id);
  }

  /**
   * Update a user by ID.
   * @param {string} id - The ID of the user to update.
   * @param {UpdateUserDto} updateData - The data to update.
   */
  async updateUserById(id: string, updateData: UpdateUserDto) {
    return await User.findByIdAndUpdate(id, updateData, { new: true });
  }

  /**
   * Delete a user by ID.
   * @param {string} id - The ID of the user to delete.
   */
  async deleteUserById(id: string) {
    return await User.findByIdAndDelete(id);
  }

  /**
   * Find all users.
   */
  async findAllUsers() {
    return await User.find();
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
