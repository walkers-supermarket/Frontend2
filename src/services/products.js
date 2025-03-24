import { apiClient } from "./config";

export const apiGetAllProducts = async () =>
    await apiClient.get("/all-products");

export const apiGetSingleProduct = async (id) => await apiClient.get(`/single-product/${id}`);

export const apiSearchProduct = async (searchTerm) => 
    apiClient.get(
        `/adverts?filter={"title":{"$regex":"${searchTerm}","$options":"i"}}`
    );

    //replace with regex url Firdause gives you
