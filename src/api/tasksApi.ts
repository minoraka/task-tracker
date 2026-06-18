import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const getTasks = async () => {
  const response = await api.get("/tasks/");
  return response.data;
};