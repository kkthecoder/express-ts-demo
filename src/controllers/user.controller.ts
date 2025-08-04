import { Request, Response } from "express";
import UserService from "../services/user.service";
import { CreateUserDto, UpdateUserDto } from "../validators/user.validator";

/**
 * UserController handles HTTP requests for user operations.
 */
export default class UserController {
  private userService: UserService;

  constructor() {
    // Create an instance of UserRepository
    this.userService = new UserService();
  }
  /**
   * Create a new user.
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   */
  createUser = async (req: Request, res: Response) => {
    try {
      const userData: CreateUserDto = req.body;
      const user = await this.userService.createUser(userData);
      res.status(201).json(user);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res
        .status(500)
        .json({ message: "Error creating user", error: errorMessage });
    }
  };

  /**
   * Retrieve a user by ID.
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   */
  getUserById = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;

      if (userId) {
        const user = await this.userService.getUserById(userId);
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } else {
        res.status(400).json({ message: "Invalid user ID" });
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res
        .status(500)
        .json({ message: "Error retrieving user", error: errorMessage });
    }
  };

  /**
   * Update a user by ID.
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   */
  updateUserById = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      if (userId) {
        const updateData: UpdateUserDto = req.body;
        const updatedUser = await this.userService.updateUserById(
          userId,
          updateData
        );
        if (updatedUser) {
          res.status(200).json(updatedUser);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } else {
        res.status(400).json({ message: "Invalid user ID" });
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res
        .status(500)
        .json({ message: "Error updating user", error: errorMessage });
    }
  };

  /**
   * Delete a user by ID.
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   */
  deleteUserById = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      if (userId) {
        const deletedUser = await this.userService.deleteUserById(userId);
        if (deletedUser) {
          res.status(200).json(deletedUser);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } else {
        res.status(400).json({ message: "Invalid user ID" });
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res
        .status(500)
        .json({ message: "Error deleting user", error: errorMessage });
    }
  };

  /**
   * Retrieve all users.
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   */
  getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res
        .status(500)
        .json({ message: "Error retrieving users", error: errorMessage });
    }
  };
}

/* export const getAllUsers = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers()
  res.json(users)
}

export const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }
  const user = await userService.getUserById(id);
}

export const createUser = (data: CreateUserDto) =>
  userRepository.createUser(data);

export const updateUser = (id: string, data: UpdateUserDto) =>
  userRepository.updateUser(id, data);

export const deleteUser = (id: string) => userRepository.deleteUser(id); */
