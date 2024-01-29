import axios from "axios";

class PlansController {
  static async getPlans() {
    try {
      const response = await axios(
        `https://rimac-front-end-challenge.netlify.app/api/plans.json`
      );
      const data = response.data.list;
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default PlansController;
