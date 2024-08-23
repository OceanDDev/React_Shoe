/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './admin.css';
import ProductTable from '../../components/ProductTable';
import { deleteProduct, getProducts, saveProduct, updateProduct } from '../../services/productService';
import ProductForm from '../../components/ProductForm';
import { Link } from 'react-router-dom';

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getProducts();
                if (Array.isArray(fetchedProducts)) {
                    setProducts(fetchedProducts);
                } else {
                    console.error('Expected an array but got:', fetchedProducts);
                    setProducts([]);
                }
            } catch (error) {
                console.log("Error fetching products");
                setProducts([]);
            }
        };
        fetchProducts();
    }, []);

    const handleAddNew = () => {
        setEditingProduct({ _id: null, product_name: "", category: "", price: "", image: "", description: "",hot:""});
    };

    const handleSave = async (product) => {
        try {
            const data = new FormData();
            Object.keys(product).forEach(key => {
                data.append(key, product[key]);
            });
    
            if (product._id) {
                try {
                    await updateProduct(product._id, product);
                    setProducts (product.map((p)=> (
                    p._id = product._id ? product : p
                    )))


                } catch (error) {
                    console.error("Error Udateting product", error);
                }
            } else {
                // Thêm sản phẩm mới
                const newProduct = await saveProduct(data);
                setProducts([...products, newProduct]);
            }
    
            setEditingProduct(null);
        } catch (error) {
            console.error("Error adding or updating product", error);
        }
    };
    
    const handleEdit = (product) => {
        setEditingProduct(product);
    };
    
    const handleDelete = async (id) =>  { 
        try {
            await deleteProduct(id);
            setProducts(products.filter(p => p._id!== id));
        } catch (error) {
            console.error("Error deleting product", error);
        }
    }

    return (
        <div>
            <>
                <section id="sidebar" >
                    <a href="#" className="brand">
                        <i className="bx bxs-smile" />
                        <span className="text">Ocean Admin</span>
                    </a>
                    <ul className="side-menu top">
                        <li className="active">
                            <Link to="/admin">
                                <i className="bx bxs-dashboard" />
                                <span className="text">Sản Phẩm</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/admin/category'>
                                <i className="bx bxs-shopping-bag-alt" />
                                <span className="text">Danh Mục</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/user">
                                <i className="bx bxs-doughnut-chart" />
                                <span className="text">Người dùng</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bx bxs-message-dots" />
                                <span className="text">Message</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bx bxs-group" />
                                <span className="text">Team</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="side-menu">
                        <li>
                            <a href="#">
                                <i className="bx bxs-cog" />
                                <span className="text">Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="logout">
                                <i className="bx bxs-log-out-circle" />
                                <span className="text">Logout</span>
                            </a>
                        </li>
                    </ul>
                </section>
                <section id="content">
                    <nav>
                        <i className="bx bx-menu" />
                        <a href="#" className="nav-link">
                            Categories
                        </a>
                        <form action="#">
                            <div className="form-input">
                                <input type="search" placeholder="Search..." />
                                <button type="submit" className="search-btn">
                                    <i className="bx bx-search" />
                                </button>
                            </div>
                        </form>
                        <input type="checkbox" id="switch-mode" hidden="" />
                        <label htmlFor="switch-mode" className="switch-mode" />
                        <a href="#" className="notification">
                            <i className="bx bxs-bell" />
                            <span className="num">8</span>
                        </a>
                        <a href="#" className="profile">
                            <img src="../images/dog.jpg" />
                        </a>
                    </nav>
                    <main>
                        <div className="head-title">
                            <div className="left">
                                <h1>Dashboard</h1>
                                <ul className="breadcrumb">
                                    <li>
                                        <a href="#">Dashboard</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />
                                    </li>
                                    <li>
                                        <a className="active" href="#">
                                            Home
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <button className="btn-download" onClick={handleAddNew}>
                                <span className="text">Thêm Sản Phẩm </span>
                            </button>
                        </div>
                        <ul className="box-info">
                            <li>
                                <i className="bx bxs-calendar-check" />
                                <span className="text">
                                    <h3>1020</h3>
                                    <p>New Order</p>
                                </span>
                            </li>
                            <li>
                                <i className="bx bxs-group" />
                                <span className="text">
                                    <h3>2834</h3>
                                    <p>Visitors</p>
                                </span>
                            </li>
                            <li>
                                <i className="bx bxs-dollar-circle" />
                                <span className="text">
                                    <h3>$2543</h3>
                                    <p>Total Sales</p>
                                </span>
                            </li>
                        </ul>
                        <div className="table-data">
                            <div className="order">
                                <div className="head">
                                    <h3>Recent Orders</h3>
                                    <i className="bx bx-search" />
                                    <i className="bx bx-filter" />
                                </div>
                                {editingProduct && (
                                    <ProductForm
                                        product={editingProduct}
                                        onSave={handleSave}
                                        onCancel={() => setEditingProduct(null)}
                                    />
                                )}
                                <ProductTable 
                                products={products} 
                                onEdit={handleEdit}
                                onDelete={handleDelete}

                                />
                            </div>
                        </div>
                    </main>
                </section>
            </>
        </div>
    );
};

export default AdminProducts;
