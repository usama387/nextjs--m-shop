// Import the PrismaClient class from the Prisma ORM library
import { PrismaClient } from "@prisma/client";

// Declare a variable to hold the PrismaClient instance
let prisma;

// Check if the environment is set to 'production'
if (process.env.NODE_ENV == "production") {
  // If in production, initialize the PrismaClient instance
  prisma = new PrismaClient();
} else {
  // In development, check if the global 'prisma' instance already exists
  if (!global.prisma) {
    // If it doesn't exist, create a new PrismaClient instance
    global.prisma = new PrismaClient();
  } else {
    // Use the global 'prisma' instance
    prisma = global.prisma;
  }
}

// 'prisma' can now be used to interact with the database in both production and development environments
export default prisma();
