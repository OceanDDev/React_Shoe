import React from 'react';

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên Người Dùng</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Quản Trị</th>
            <th>Chức Năng</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.length > 0 ? (
            users.map(user => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.fullname}</td>
                <td>{user.birthday}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                <td>
                  <button className='button-admin' onClick={() => onEdit(user)}>Sửa</button>
                  <button className='button-admin' onClick={() => onDelete(user._id)}>Xóa</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Không có người dùng</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
