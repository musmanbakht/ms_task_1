import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

async function fetchDepartments() {
  try {
    const response = await axios.get(`${BASE_URL}/departments/all`);
    return response.data; // axios already parses JSON
  } catch (error) {
    console.error("Error fetching departments:", error);
    throw error;
  }
}
async function dashboardStats() {
  try {
    const response = await axios.get(`${BASE_URL}/dashboard`);
    return response.data; // axios already parses JSON
  } catch (error) {
    console.error("Error fetching departments:", error);
    throw error;
  }
}


export { fetchDepartments , dashboardStats};
