import axios from "axios";

axios.defaults.baseURL = "https://dvla-lookup.onrender.com"
// axios.defaults.baseURL = "https://jen123ryri.execute-api.us-east-1.amazonaws.com/api/lookup?registrationNumber=MC20FLY"

export async function getVehicleDetails(registrationNumber) {
      const response = await axios.get('/api/lookup', {
        params: {
          registrationNumber: registrationNumber
        }
      });
      return response.data;
  }
  