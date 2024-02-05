import axios from "axios";

axios.defaults.baseURL = 'https://jen123ryri.execute-api.us-east-1.amazonaws.com'

export async function getVehicleDetails(registrationNumber) {
    try {
      const response = await axios.get('/api/lookup', {
        params: {
          registrationNumber: registrationNumber
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  