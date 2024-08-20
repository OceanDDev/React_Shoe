import React from 'react'

const CategoryTable = ({ categories, onEdit, onDelete }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên Danh Mục</th>
            <th>Mô tả</th>
            <th>Chức Năng</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(categories) && categories.length > 0 ? (
            categories.map(category => (
              <tr key={category._id}>
                <td>{category._id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>
                  <button className='button-admin' onClick={() => onEdit(category)}>Sửa</button>
                  <button className='button-admin' onClick={() => onDelete(category._id)}>Xóa</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No categories available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CategoryTable
