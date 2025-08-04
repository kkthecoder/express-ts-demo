import express from "express";
import { connectToDatabase } from "./config/database.config";
import userRoutes from "./routes/user.route";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Function to start the server
const startServer = () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

// Connect to the database and start the server
connectToDatabase(process.env.MONGO_URI!)
  .then(() => {
    console.log("Database connection successful");
    startServer();
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process with failure
  });

// Use the user routes
app.use("/v1/users", userRoutes);
