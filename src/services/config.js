import axios from "axios";

export const baseUrl = import.meta.env.VITE_BASE_URL;

const token = localStorage.getItem("token");

if (token) {
    axios.defaults.headers.common["Authorizations"] = `Bearer ${token}`
};

export const apiClient = axios.create({
    baseUrl: baseUrl,
    
});
