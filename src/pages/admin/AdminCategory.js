/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './admin.css';
import { addCategory, deleteCategory, getCategory, updateCategory } from '../../services/categoryService';
import CategoryTable from '../../components/CategoryTable';
import CategoryForm from '../../components/CategoryForm';
import { Link } from 'react-router-dom';

const AdminCategory = () => {
    const [categories, setCategories] = useState([]);
    const [editingCategory, setEditingCategory] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const fetchedCategories = await getCategory();
                setCategories(fetchedCategories);
            } catch (error) {
                console.error(`Error fetching category`, error);
            }
        }
        fetchCategories();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteCategory(id);
            setCategories(categories.filter((category) => category._id !== id));
        } catch (error) {
            console.error("Error deleting category", error);
        }
    };

    const handleEdit = (category) => {
        setEditingCategory(category);
    };

    const handleSave = async (category) => {
        try {
            if (category._id) {
                await updateCategory(category._id, category);
                setCategories(
                    categories.map((c) => (c._id === category._id ? category : c))
                );
            } else {
                const newCategory = await addCategory(category);
                setCategories([...categories, newCategory]);
            }
        } catch (error) {
            console.error("Error saving category", error);
        }
        setEditingCategory(null);
    };

    const handleAddNew = () => {
        setEditingCategory({ _id: null, name: "", description: "" });
    };

    const handleCancel = () => {
        setEditingCategory(null);
    };

    return (
        <div>
            <>
                <section id="sidebar">
                    <a href="#" className="brand">
                        <i className="bx bxs-smile" />
                        <span className="text">Ocean Admin</span>
                    </a>
                    <ul className="side-menu top">
                        <li>
                            <Link to="/admin">
                                <i className="bx bxs-dashboard" />
                                <span className="text">Sản Phẩm</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link to="/admin/category">
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
                            <img src="../images/dog.jpg" alt="Profile" />
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
                                <span className="text">Thêm Danh Mục</span>
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
                                {editingCategory && (
                                    <CategoryForm
                                        initialValues={editingCategory}
                                        onSave={handleSave}
                                        onCancel={handleCancel}
                                    />
                                )}
                                <CategoryTable
                                    categories={categories}
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
}

export default AdminCategory;
