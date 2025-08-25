import axios from "axios";

const BASE_URL = "http://localhost:5001/api";

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
async function getAllStaff(q, page, limit) {
  try {
    const params = new URLSearchParams({
      ...(q && { q }),
      ...(page && { page: page.toString() }),
      ...(limit && { limit: limit.toString() }),
    });

    const response = await axios.get(`${BASE_URL}/staff?${params}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching staff:", error);
    throw error;
  }
}

export { fetchDepartments, dashboardStats, getAllStaff };
