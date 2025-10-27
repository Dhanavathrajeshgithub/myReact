import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // Create new user account
  async createAccount({ email, password, name }) {
    try {
      const user = await this.account.create(
        ID.unique(), // ✅ Appwrite expects userId as first argument
        email,
        password,
        name
      );

      if (user) {
        // ✅ Optionally log the user in after signup
        return this.login({ email, password });
      } else {
        return user;
      }
    } catch (err) {
      console.error("Create account failed:", err);
      throw err;
    }
  }

  // Login existing user
  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return session;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  // Get current logged-in user
  async getCurrUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (err) {
      console.error("Get current user failed:", err);
      throw err;
    }
  }

  // Logout user
  async logout() {
    try {
      await this.account.deleteSessions(); // ✅ Logs out from all sessions
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
