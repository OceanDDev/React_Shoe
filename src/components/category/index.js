import React, { useEffect, useState } from 'react'
import { getCategory } from '../../services/categoryService'
import { Link } from 'react-router-dom';

const GetCategoryList = () => {
    const [category, setCategory] = useState([]);

useEffect(()=>{ 
        const fechCategory = async () => { 
            try {
                const reponse = await getCategory()
                setCategory(reponse);
                console.log(reponse);
            } catch (error) {
                console.log("Error fetching category",error);
            }
        }
        fechCategory();
},[])
  return (
    <div>
   <div className="group-menu">
                <div
                  className="title_block d-block d-sm-none d-none d-sm-block d-md-none"
                  data-toggle="collapse"
                  href="#collapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample1"
                >
                  Danh mục sản phẩm
                  <span>
                    <i
                      className="fa fa-angle-down"
                      data-toggle="collapse"
                      href="#collapseExample1"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample1"
                    />
                  </span>
                </div>
                <div
                  className="block_content layered-category collapse"
                  id="collapseExample1"
                >
                  <div
                    className="layered-content card card-body"
                    style={{ border: 0, padding: 0 }}
                  >
                    <ul className="menuList-links">
                    {category.map (cate => (

                      <li key={cate._id} className="">
                        <Link to={`/products?category=${cate.name}`} title="Trang chủ">
                          <span>{cate.name}</span>
                        </Link>
                      </li>
                    ))}
                     
                    </ul>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default GetCategoryList