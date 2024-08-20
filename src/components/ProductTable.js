/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const ProductTable = ({ products,onEdit,onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Hình ảnh</th>
          <th>Tên sản phẩm</th>
          <th>Giá</th>
          <th>Mô tả</th>
          <th>Danh mục</th>
          <th>Sản phẩm hot </th>
          <th>Chức năng</th>

        </tr>
      </thead>
      <tbody>
        {Array.isArray(products) && products.length > 0 ? (
          products.map(product => (
            <tr key={product._id}>
              <td>
                <img src={`http://localhost:3000/images/${product.image}`} style={{width: "100px"}} />
              </td>
              <td>{product.product_name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category?.categoryName}</td>
              <td>{product.hot}</td>
              <td>
                <button className='button-admin' onClick={() => onEdit(product)}>Sửa</button>
                <button className='button-admin' onClick={() => onDelete(product._id)}>Xóa</button>

    
              </td>



            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">No products available</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default ProductTable
