import express from "express";
import UserController from "../controllers/user.controller";
import {
  createUserSchema,
  updateUserSchema,
} from "../validators/user.validator";
import { validate } from "../middlewares/validate.middleware";

const router = express.Router();
const userController = new UserController();

/**
 * Route to create a new user.
 * POST /users
 */
router.post("/", validate(createUserSchema), userController.createUser);

/**
 * Route to get a user by ID.
 * GET /users/:id
 */
router.get("/:id", userController.getUserById);

/**
 * Route to update a user by ID.
 * PUT /users/:id
 */
router.put("/:id", validate(updateUserSchema), userController.updateUserById);

/**
 * Route to delete a user by ID.
 * DELETE /users/:id
 */
router.delete("/:id", userController.deleteUserById);

/**
 * Route to get all users.
 * GET /users
 */
router.get("/", userController.getAllUsers);

export default router;
