/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { getCategory } from '../services/categoryService';

const ProductForm = ({ product, onSave, handleReset, onCancel }) => {
    const [formData, setFormData] = useState({ ...product, hot: product.hot || 0 });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const fetchedCategories = await getCategory();
                setCategories(fetchedCategories);
            } catch (error) {
                console.error("Error fetching categories", error);
            }
        };
        fetchCategories();
    }, []);

    const handleChange = (e) => {
        
        
        const { name, value, files, checked, type } = e.target;
        
        if (type === 'file') {
            setFormData((formData) => ({ ...formData, [name]: files[0] }));
        } else if (type === 'checkbox') {
            setFormData((formData) => ({ ...formData, [name]: checked ? 1 : 0 }));
        } else {
            setFormData((formData) => ({ ...formData, [name]: value }));
        }
        // let imgTerm = ''
        // if(formData.image.length> 0 && formData.image[0]){
        //     imgTerm = formData.image[0]
        // }else{
        //     imgTerm  = formData.imgOld
        // }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        console.log(formData);
        
    };

    return (
        <form encType="multipart/form-data" onSubmit={handleSubmit} className="product-form">
            <div className="form-group">
                <label htmlFor="product_name">Product Name</label>
                <input
                    type="text"
                    id="product_name"
                    name="product_name"
                    value={formData.product_name || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                    id="category"
                    name="category"
                    value={formData.category || ''}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
            <img width={200} name='imgOld' src={`http://localhost:3000/products/images/${formData?.image}`}/>
            </div>
            <div className="form-group">
                <label htmlFor="hot">Hot</label>
                <input
                    type="checkbox"
                    id="hot"
                    name="hot"
                    checked={formData.hot === 1}
                    onChange={handleChange}
                />
            </div>
            <div className="form-actions">
            
                <button type="submit">Save Product</button>
                
               
            </div>
        </form>
    );
};

export default ProductForm;
