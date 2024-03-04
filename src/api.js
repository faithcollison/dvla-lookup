import axios from "axios";

axios.defaults.baseURL = "https://dvla-lookup.onrender.com"

export async function getVehicleDetails(registrationNumber) {
      const response = await axios.get('/api/lookup', {
        params: {
          registrationNumber: registrationNumber
        }
      });

      return response.data;
  }
  