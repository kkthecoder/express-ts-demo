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
  createUser(userData: CreateUserDto) {
    return this.userRepository.createUser(userData);
  }

  /**
   * Retrieve a user by ID.
   * @param {string} id - The ID of the user to retrieve.
   */
  getUserById(id: string) {
    return this.userRepository.findUserById(id);
  }

  /**
   * Update a user by ID.
   * @param {string} id - The ID of the user to update.
   * @param {UpdateUserDto} updateData - The data to update.
   */
  updateUserById(id: string, updateData: UpdateUserDto) {
    return this.userRepository.updateUserById(id, updateData);
  }

  /**
   * Delete a user by ID.
   * @param {string} id - The ID of the user to delete.
   */
  deleteUserById(id: string) {
    return this.userRepository.deleteUserById(id);
  }

  /**
   * Retrieve all users.
   */
  getAllUsers() {
    return this.userRepository.findAllUsers();
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
