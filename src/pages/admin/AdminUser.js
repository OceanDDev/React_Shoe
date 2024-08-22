/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { addUser, deleteUser, getUser, updateUser } from '../../services/accountService'; 
import UserTable from '../../components/UserTable';
import UserForm from '../../components/UserForm';
import { Link } from 'react-router-dom';

const AdminUser = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await getUser();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error('Error fetching users', error);
            }
        };
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            setUsers(users.filter((user) => user._id !== id));
        } catch (error) {
            console.error('Error deleting user', error);
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user);
    };

    const handleSave = async (user) => {
        try {
            if (user._id) {
                await updateUser(user._id, user);
                setUsers(users.map((u) => (u._id === user._id ? user : u)));
            } else {
                const newUser = await addUser(user);
                setUsers([...users, newUser]);
            }
        } catch (error) {
            console.error('Error saving user', error);
        }
        setEditingUser(null);
    };

    const handleAddNew = () => {
        setEditingUser({ _id: null, fullname: "", email: "", birthday: "", password: "", isAdmin: false });
    };

    const handleCancel = () => {
        setEditingUser(null);
    };

    return (
        <div>
            <section id="sidebar">
                <Link to="/admin" className="brand">
                    <i className="bx bxs-smile" />
                    <span className="text">User Admin</span>
                </Link>
                <ul className="side-menu top">
                    <li>
                        <Link to="/admin">
                            <i className="bx bxs-dashboard" />
                            <span className="text">Dashboard</span>
                        </Link>
                    </li>
                    <li className="active">
                        <Link to="/admin/users">
                            <i className="bx bxs-user" />
                            <span className="text">Người Dùng</span>
                        </Link>
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
                    <span className="nav-link">Users</span>
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
                        <img src="../images/profile.jpg" alt="Profile" />
                    </a>
                </nav>
                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>User Management</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                </li>
                                <li>
                                    <a className="active" href="#">
                                        User Management
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <button className="btn-download" onClick={handleAddNew}>
                            <span className="text">Thêm Người Dùng</span>
                        </button>
                    </div>
                    <ul className="box-info">
                        <li>
                            <i className="bx bxs-calendar-check" />
                            <span className="text">
                                <h3>1020</h3>
                                <p>New Orders</p>
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
                                <h3>Danh Sách Người Dùng</h3>
                                <i className="bx bx-search" />
                                <i className="bx bx-filter" />
                            </div>
                            {editingUser && (
                                <UserForm
                                    initialValues={editingUser}
                                    onSave={handleSave}
                                    onCancel={handleCancel}
                                />
                            )}
                            <UserTable
                                users={users}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        </div>
                    </div>
                </main>
            </section>
        </div>
    );
}

export default AdminUser;
