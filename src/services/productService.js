import axios from 'axios';

const API_URL = 'https://server-shoe-inky.vercel.app/products';

export const getProducts = async () => { 
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log('Error fetching all products', error);
        throw error;
    }
};

export const getProductDetail = async (productId) => {
    try {
        const response = await axios.get(`${API_URL}/${productId}`);
        return response.data; 
    } catch (error) {
        console.log('Error fetching product', error);
        throw error;
    }
};

export const searchProducts = async (keyword) => { 
    try {
        const response = await axios.get(`${API_URL}/search/${keyword}`);
        return response.data;
    } catch (error) {
        console.log('Error fetching product', error);
        throw error;
    }
};

export const getHotProducts = async (num) => {
    try {
        const response = await axios.get(`${API_URL}/hot-products/${num}`);
        return response.data;
    } catch (error) {
        console.log('Error fetching hot products', error);
        throw error;
    }
};

export const getProductByCategory = async (categoryName) => {
    try {
        const response = await axios.get(`${API_URL}/category/${categoryName}`);
        return response.data;
    } catch (error) {
        console.log('Error fetching products by category', error);
        throw error;
    }
};

export const saveProduct = async (product) => { 
    try {
        const response = await axios.post(`${API_URL}/insert`, product, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error saving product", error);
        throw error;
    }
};

export const deleteProduct = async (_id) => { 
    try {
        const response = await axios.delete(`${API_URL}/delete/${_id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting product", error);
        throw error;
    }
};

export const updateProduct = async (_id, updateProduct) => {
    try {
        const response = await axios.put(`${API_URL}/update/${_id}`, updateProduct, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error updating product", error);
        throw error;
    }
};
