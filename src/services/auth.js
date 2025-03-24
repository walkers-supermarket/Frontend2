import { apiClient } from "./config";

export const apiSignup = async (payload) => {
    return await apiClient.post("/users/register", payload);
};
export const apiProfile = async () => {
    return await apiClient.get("/users/me")
};

export const apiLogin = async (payload) => apiClient.post("/user/login", payload);