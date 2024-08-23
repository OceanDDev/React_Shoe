/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect,useState} from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { getProductByCategory, getProducts, searchProducts } from '../services/productService';
import GetCategoryList from '../components/category';
const Products = () => {
 

    const [products,setProducts] = useState([])
    const [searchParams] = useSearchParams()
    const search = searchParams.get('search')
    const category = searchParams.get('category')
    useEffect(()=> { 
        const fetchProducts = async () => { 
            try { 
              let allProducts 
          if(search){ 
              allProducts = await searchProducts(search)
              setProducts(allProducts)
              console.log(allProducts);
          }
          else if (category) { 
            allProducts = await getProductByCategory(category)
            setProducts(allProducts)
            console.log(allProducts);
          } 
          else { 
            allProducts = await getProducts()
              setProducts(allProducts)
              
              
          }
                // const fetchedProducts = await getProducts();
                // setProducts(fetchedProducts);
            } catch (error) {
                console.log("Error fetchProducts",error);
            }
        };
        fetchProducts();
    },[search,category])
  return (
    <div>
      <div className="container" style={{ marginTop: 50 }}>
  <div className="row">
    <div className="col-md-3 col-sm-12 col-xs-12 sidebar-fix">
      <div className="wrap-filter">
        <div className="box_sidebar">
          <div className="block left-module">
            <div className=" filter_xs">
              <GetCategoryList></GetCategoryList>
              <div className="layered">
                <p
                  className="title_block d-block d-sm-none d-none d-sm-block d-md-none"
                  data-toggle="collapse"
                  href="#collapseExample2"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample2"
                >
                  Bộ lọc sản phẩm
                  <span>
                    <i
                      className="fa fa-angle-down"
                      data-toggle="collapse"
                      href="#collapseExample2"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample2"
                    />
                  </span>
                </p>
                <div className="block_content collapse" id="collapseExample2">
                  <div
                    className="group-filter card card-body"
                    style={{ border: 0, padding: 0 }}
                    aria-expanded="true"
                  >
                    <div className="layered_subtitle dropdown-filter">
                      <span>Thương hiệu</span>
                      <span className="icon-control">
                        <i className="fa fa-minus" />
                      </span>
                    </div>
                    <div className="layered-content bl-filter filter-brand">
                      <ul className="check-box-list">
                        <li>
                          <input
                            type="checkbox"
                            id="data-brand-p1"
                            defaultValue="Khác"
                          />
                          <label htmlFor="data-brand-p1">Khác</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="group-filter" aria-expanded="true">
                    <div className="layered_subtitle dropdown-filter">
                      <span>Giá sản phẩm</span>
                      <span className="icon-control">
                        <i className="fa fa-minus" />
                      </span>
                    </div>
                    <div className="layered-content bl-filter filter-price">
                      <ul className="check-box-list">
                        <li>
                          <input type="checkbox" id="p1" />
                          <label htmlFor="p1">
                            <span>Dưới</span> 500,000₫
                          </label>
                        </li>
                        <li>
                          <input type="checkbox" id="p2" />
                          <label htmlFor="p2">500,000₫ - 1,000,000₫</label>
                        </li>
                        <li>
                          <input type="checkbox" id="p3" />
                          <label htmlFor="p3">1,000,000₫ - 1,500,000₫</label>
                        </li>
                        <li>
                          <input type="checkbox" id="p4" />
                          <label htmlFor="p4">2,000,000₫ - 5,000,000₫</label>
                        </li>
                        <li>
                          <input type="checkbox" id="p5" />
                          <label htmlFor="p5">
                            <span>Trên</span> 5,000,000₫
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="group-filter" aria-expanded="true">
                    <div className="layered_subtitle dropdown-filter">
                      <span>Màu sắc</span>
                      <span className="icon-control">
                        <i className="fa fa-minus" />
                      </span>
                    </div>
                    <div className="layered-content filter-color s-filter">
                      <ul className="check-box-list">
                        <li>
                          <input type="checkbox" id="data-color-p1" />
                          <label
                            htmlFor="data-color-p1"
                            style={{ backgroundColor: "#fb4727" }}
                          />
                        </li>
                        <li>
                          <input type="checkbox" id="data-color-p2" />
                          <label
                            htmlFor="data-color-p2"
                            style={{ backgroundColor: "#fdfaef" }}
                          />
                        </li>
                        <li>
                          <input type="checkbox" id="data-color-p3" />
                          <label
                            htmlFor="data-color-p3"
                            style={{ backgroundColor: "#3e3473" }}
                          />
                        </li>
                        <li>
                          <input type="checkbox" id="data-color-p4" />
                          <label
                            htmlFor="data-color-p4"
                            style={{ backgroundColor: "#ffffff" }}
                          />
                        </li>
                        <li>
                          <input type="checkbox" id="data-color-p5" />
                          <label
                            htmlFor="data-color-p5"
                            style={{ backgroundColor: "#75e2fb" }}
                          />
                        </li>
                        <li>
                          <input type="checkbox" id="data-color-p6" />
                          <label
                            htmlFor="data-color-p6"
                            style={{ backgroundColor: "#cecec8" }}
                          />
                        </li>
                        <li>
                          <input type="checkbox" id="data-color-p7" />
                          <label
                            htmlFor="data-color-p7"
                            style={{ backgroundColor: "#6daef4" }}
                          />
                        </li>
                        <li>
                          <input type="checkbox" id="data-color-p8" />
                          <label
                            htmlFor="data-color-p8"
                            style={{ backgroundColor: "#000000" }}
                          />
                        </li>
                        <li>
                          <input type="checkbox" id="data-color-p9" />
                          <label
                            htmlFor="data-color-p9"
                            style={{ backgroundColor: "#e2262a" }}
                          />
                        </li>
                        <li>
                          <input type="checkbox" id="data-color-p10" />
                          <label
                            htmlFor="data-color-p10"
                            style={{ backgroundColor: "#ee8aa1" }}
                          />
                        </li>
                        <li>
                          <input type="checkbox" id="data-color-p11" />
                          <label
                            htmlFor="data-color-p11"
                            style={{ backgroundColor: "#4a5250" }}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="group-filter" aria-expanded="true">
                    <div className="layered_subtitle dropdown-filter">
                      <span>Kích thước</span>
                      <span className="icon-control">
                        <i className="fa fa-minus" />
                      </span>
                    </div>
                    <div className="layered-content filter-size s-filter">
                      <ul className="check-box-list clearfix">
                        <li>
                          <input type="checkbox" id="data-size-p1" />
                          <label htmlFor="data-size-p1">35</label>
                        </li>
                        <li>
                          <input type="checkbox" id="data-size-p2" />
                          <label htmlFor="data-size-p2">36</label>
                        </li>
                        <li>
                          <input type="checkbox" id="data-size-p3" />
                          <label htmlFor="data-size-p3">37</label>
                        </li>
                        <li>
                          <input type="checkbox" id="data-size-p4" />
                          <label htmlFor="data-size-p4">38</label>
                        </li>
                        <li>
                          <input type="checkbox" id="data-size-p5" />
                          <label htmlFor="data-size-p5">39</label>
                        </li>
                        <li>
                          <input type="checkbox" id="data-size-p6" />
                          <label htmlFor="data-size-p6">40</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-9 col-sm-12 col-xs-12">
      <div className="wrap-collection-title row">
        <div className="col-md-8 col-sm-12 col-xs-12">
          <h1 className="title">Tất cả sản phẩm</h1>
          <div className="alert-no-filter" />
        </div>
        <div
          className="col-md-4 d-sm-none d-md-block d-none d-sm-block"
          style={{ float: "left" }}
        >
          <div className="option browse-tags">
            <span className="custom-dropdown custom-dropdown--grey">
              <select className="sort-by custom-dropdown__select">
                <option value="price-ascending">Giá: Tăng dần</option>
                <option value="price-descending">Giá: Giảm dần</option>
                <option value="title-ascending">Tên: A-Z</option>
                <option value="title-descending">Tên: Z-A</option>
                <option value="created-ascending">Cũ nhất</option>
                <option value="created-descending">Mới nhất</option>
                <option value="best-selling">Bán chạy nhất</option>
                <option value="quantity-descending">Tồn kho: Giảm dần</option>
              </select>
            </span>
          </div>
        </div>
      </div>
      <div className="row">
     {products.map(product => (
  <div key={product._id} className="col-md-3 col-sm-6 col-xs-6 col-6">
    <div className="product-block">
      <div className="product-img fade-box">
        <Link to={`/productDetail/${product._id}`} title="Adidas EQT Cushion ADV" className="img-resize">
          <img
          src={`https://server-shoe-wheat.vercel.app/images/${product.image}`}
            alt="Adidas EQT Cushion ADV"
            className="lazyloaded"
          />
          <img
          src={`https://server-shoe-wheat.vercel.app/images/${product.image}`}
            alt="Adidas EQT Cushion ADV"
            className="lazyloaded"
          />
        </Link>
      </div>
      <div className="product-detail clearfix">
        <div className="pro-text">
          <a
            style={{
              color: "black",
              fontSize: 14,
              textDecoration: "none"
            }}
            href="#"
            title="Adidas EQT Cushion ADV"
            inspiration=""
            pack=""
          >
            {product.product_name}
          </a>
        </div>
        <div className="pro-price">
          <p className="">{product.price}</p>
        </div>
      </div>
    </div>
  </div>
))}

   
      </div>
      <div className="sortpagibar pagi clearfix text-center">
        <div id="pagination" className="clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <span className="page-node current">1</span>
            <a className="page-node" href="">
              2
            </a>
            <a className="next" href="">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 31 10"
                style={{
                  enableBackground: "new 0 0 31 10",
                  width: 31,
                  height: 10
                }}
                xmlSpace="preserve"
              >
                <polygon points="31,5 25,0 25,4 0,4 0,6 25,6 25,10 " />
              </svg>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Products
