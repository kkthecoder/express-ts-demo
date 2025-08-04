import UserRepository from "../repositories/user.repository";
import { CreateUserDto, UpdateUserDto } from "../validators/user.validator";

/**
 * UserService handles business logic for user operations.
 */
export default class UserService {
  private userRepository: UserRepository;

  constructor() {
    // Create an instance of UserRepository
    this.userRepository = new UserRepository();
  }
  /**
   * Create a new user.
   * @param {CreateUserDto} userData - Validated user data.
   */
  async createUser(userData: CreateUserDto) {
    return await this.userRepository.createUser(userData);
  }

  /**
   * Retrieve a user by ID.
   * @param {string} id - The ID of the user to retrieve.
   */
  async getUserById(id: string) {
    return await this.userRepository.findUserById(id);
  }

  /**
   * Update a user by ID.
   * @param {string} id - The ID of the user to update.
   * @param {UpdateUserDto} updateData - The data to update.
   */
  async updateUserById(id: string, updateData: UpdateUserDto) {
    return await this.userRepository.updateUserById(id, updateData);
  }

  /**
   * Delete a user by ID.
   * @param {string} id - The ID of the user to delete.
   */
  async deleteUserById(id: string) {
    return await this.userRepository.deleteUserById(id);
  }

  /**
   * Retrieve all users.
   */
  async getAllUsers() {
    return await this.userRepository.findAllUsers();
  }
}

/* 
export const getAllUsers = () => userRepository.getAllUsers();

export const getUserById = (id: string) => userRepository.getUserById(id);

export const createUser = (data: CreateUserDto) =>
  userRepository.createUser(data);

export const updateUser = (id: string, data: UpdateUserDto) =>
  userRepository.updateUser(id, data);

export const deleteUser = (id: string) => userRepository.deleteUser(id);
 */
