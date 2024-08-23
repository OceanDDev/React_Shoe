import axios from 'axios';


const API_URL = 'https://server-shoe-wheat.vercel.app/category'

export const getCategory = async () =>{ 
    try {
        const reponse = await axios.get(API_URL)
        return reponse.data;
    } catch (error) {
        console.log('Error fetching all category', error);
        throw error;
    }
} 

export const addCategory = async (category) => { 
    try {
        const reponse = await axios.post(API_URL, category);
        return reponse.data;
    } catch (error) {
        console.log('Error adding new category', error);
        throw error;
    }
}

export const updateCategory = async (id, category) => {
    try {
        const reponse = await axios.put(`${API_URL}/${id}`, category);
        return reponse.data;
    } catch (error) {
        console.log('Error updating category', error);
        throw error;
    }
}

export const deleteCategory = async (id) => {
    try {
        const reponse = await axios.delete(`${API_URL}/${id}`);
        return reponse.data;
    } catch (error) {
        console.log('Error deleting category', error);
        throw error;
    }
}