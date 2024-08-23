import axios from 'axios';


const API_URL = 'https://server-shoe-wheat.vercel.app/products'

export const getProducts = async () =>{ 
    try {
        const reponse = await axios.get(API_URL)
        return reponse.data;
    } catch (error) {
        console.log('Error fetching all products', error);
        throw error;
    }
}

export const getProductDetail = async (productId) => {
    try {
        const response = await axios.get(`${API_URL}/${productId}`);
        return response.data; 
    } catch (error) {
        console.log('Error fetching product', error);
        throw error;
    }
}

export const searchProducts = async (keyword) =>{ 
    try {
        const reponse = await axios.get(`${API_URL}/search/${keyword}`);
        return reponse.data;
    } catch (error) {
        console.log('Error fetching product', error);
        throw error;
    }
}

export const getHotProducts = async (num) => {
    try {
      const response = await axios.get(`${API_URL}/hot-products/${1}`);
      return response.data;
    } catch (error) {
      console.log('Error fetching hot products', error);
      throw error;
    }
  };


  export const getProductByCategory = async (categoryName) =>{
    try {
        const reponse = await axios.get(`${API_URL}/category/${categoryName}`)
        return reponse.data;
    } catch (error) {
        console.log('Error fetching products by category', error);
        throw error;
    }
}


export const saveProduct = async (product) => { 
    try {
        const reponse = await axios.post(`${API_URL}/insert`, product);    
        return reponse.data;
    } catch (error) {
        console.log("Error saving product", error);
        throw error;
    }
 }

export const deleteProduct = async (_id) => { 
    try {
        const reponse = await axios.delete(`${API_URL}/delete/${_id}`);
        return reponse.data
    } catch (error) {
        console.error("Eror deleting", error);
        throw error;
    }
}

export const updateProduct = async (_id,updateProduct) => {
    try {
        const reponse = await axios.put(`${API_URL}/update/${_id}`,updateProduct, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
        return reponse.data
    } catch (error) {
        console.error("Error Updating",error);
        throw error;
    }
}