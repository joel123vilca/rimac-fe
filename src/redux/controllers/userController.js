import axios from "axios";

class UserController {
  static async getUser() {
    try {
      const response = await axios(
        `https://rimac-front-end-challenge.netlify.app/api/user.json`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default UserController;
