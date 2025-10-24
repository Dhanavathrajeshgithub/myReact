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

  async createAccount({ email, password, name }) {
    try {
      const user = await this.account.create({
        userId: ID.unique(),
        email,
        password,
        name,
      });
      if (user) {
        // call another method
        return this.login({ email, password });
      } else {
        return user;
      }
    } catch (err) {
      throw err;
    }
  }

  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession({
        email,
        password,
      });
      return session;
    } catch (error) {
      throw error;
    }
    return null;
  }

  async getCurrUser() {
    try {
      const user = await this.account.get();
      return user;
      // Logged in
    } catch (err) {
      // Not logged in
      throw err;
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
