/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../services/productService';
import { useShoppingContext } from '../context/ShoppingContext';

const ProductDetail = () => {
  const {addCartItem} = useShoppingContext();
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const fetchedDetail = await getProductDetail(id);
        setProductDetail(fetchedDetail);
      } catch (error) {
        console.log('Error fetching product detail', error);
        throw error;
      }
    };
    fetchDetail();
  }, [id]);

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="row product-detail-wrapper">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="row product-detail-main pr_style_01">
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="product-gallery">
                <div className="product-gallery__thumbs-container hidden-sm hidden-xs"></div>
                <div className="product-image-detail box__product-gallery scroll hidden-xs">
                  <ul id="sliderproduct" className="site-box-content slide_product">
                    {['imgg1a', 'imgg2a', 'imgg3a'].map((id, index) => (
                      <li key={index} className={`product-gallery-item gallery-item ${index === 0 ? 'current' : ''}`} id={id}>
                        <img className="product-image-feature"  src={`https://server-shoe-inky.vercel.app/images/${productDetail.image}`} alt="Nike Air Max 90 Essential" />
                      </li>
                    ))}
                  </ul>
                  <div className="product-image__button">
                    <div id="product-zoom-in" className="product-zoom icon-pr-fix" aria-label="Zoom in" title="Zoom in">
                      <span className="zoom-in" aria-hidden="true">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 36 36"
                          style={{ enableBackground: 'new 0 0 36 36', width: '30px', height: '30px' }}
                          xmlSpace="preserve"
                        >
                          <polyline points="6,14 9,11 14,16 16,14 11,9 14,6 6,6"></polyline>
                          <polyline points="22,6 25,9 20,14 22,16 27,11 30,14 30,6"></polyline>
                          <polyline points="30,22 27,25 22,20 20,22 25,27 22,30 30,30"></polyline>
                          <polyline points="14,30 11,27 16,22 14,20 9,25 6,22 6,30"></polyline>
                        </svg>
                      </span>
                    </div>
                    <div className="gallery-index icon-pr-fix">
                      <span className="current">1</span> / <span className="total">8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-12 col-xs-12 product-content-desc" id="detail-product">
              <div className="product-content-desc-1">
                <div className="product-title">
                  <h1>{productDetail.product_name}</h1>
                  <span id="pro_sku">SKU: S-0015-1</span>
                </div>
                <div className="product-price" id="price-preview">
                  <span className="pro-price">{productDetail.price} $</span>
                </div>
                <form id="add-item-form" action="/cart/add" method="post" className="variants clearfix">
                  <div className="select clearfix">
                    <div className="selector-wrapper">
                      <label htmlFor="product-select-option-0">Màu sắc</label>
                      <span className="custom-dropdown custom-dropdown--white">
                        <select className="single-option-selector custom-dropdown__select custom-dropdown__select--white" data-option="option1" id="product-select-option-0">
                          <option value="Tím">Tím</option>
                          <option value="Xanh">Xanh</option>
                        </select>
                      </span>
                    </div>
                    <div className="selector-wrapper">
                      <label htmlFor="product-select-option-1">Kích thước</label>
                      <span className="custom-dropdown custom-dropdown--white">
                        <select className="single-option-selector custom-dropdown__select custom-dropdown__select--white" data-option="option2" id="product-select-option-1">
                          <option value="36">36</option>
                          <option value="37">37</option>
                          <option value="38">38</option>
                          <option value="35">35</option>
                        </select>
                      </span>
                    </div>
                    <select id="product-select" name="id" style={{ display: 'none' }}>
                      <option value="1040377813">Tím / 36 - 4,800,000₫</option>
                      <option value="1040377814">Tím / 37 - 4,800,000₫</option>
                      <option value="1040377815">Tím / 38 - 4,800,000₫</option>
                      <option value="1040409049">Xanh / 35 - 4,800,000₫</option>
                      <option value="1040409050">Xanh / 36 - 4,800,000₫</option>
                      <option value="1040409053">Xanh / 37 - 4,800,000₫</option>
                      <option value="1040409054">Xanh / 38 - 4,800,000₫</option>
                    </select>
                  </div>
                  <div className="select-swatch clearfix">
                    
                    <div id="variant-swatch-1" className="swatch clearfix" data-option="option2" data-option-index="1">
                      <div className="select-swap">
                        {['36', '37', '38', '35'].map((size, index) => (
                          <div key={index} data-value={size} className={`n-sd swatch-element ${size} ${size === '35' ? 'soldout' : ''}`}>
                            <input
                              className="variant-1"
                              id={`swatch-1-${size}`}
                              type="radio"
                              name="option2"
                              value={size}
                              data-vhandle={size}
                              defaultChecked={size === '36'}
                              disabled={size === '35'}
                            />
                            <label htmlFor={`swatch-1-${size}`} className={size === '35' ? '' : 'sd'}>
                              <span>{size}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="selector-actions">
                    <div className="quantity-area clearfix">
                      <input type="button" value="-" className="qty-btn" />
                      <input type="text" id="quantity" name="quantity" defaultValue="1" min="1" className="quantity-selector" ref={(quantity) => quantity} />
                      <input type="button" value="+" className="qty-btn" />
                    </div>
                    <div className="wrap-addcart clearfix">
                      <div className="row-flex">
                        <button type="button" className="button btn-addtocart addtocart-modal" onClick={()=> { 
                          addCartItem(productDetail)
                        }}>
                          Thêm vào
                        </button>
                        <button type="button" className="buy-now button" style={{ display: 'block' }}>
                          Mua ngay
                        </button>
                      </div>
                      
                    </div>
                  </div>
                </form>
                <div className="product-description">
                  <div className="title-bl">
                    <h2>Mô tả</h2>
                  </div>
                  <div className="description-content">
                    <div className="description-productdetail">
                      <p>
                        <span>
                          Hiện đại và thời trang khi diện item mới của Nike. Màu sắc lạ mắt, chất liệu thoáng mát, nhẹ nhàng, phù hợp với những chàng trai yêu phong cách sports.
                        </span>
                        <br />
                        <br />
                      </p>
                      <ul>
                        <li>Chất liệu cao cấp EVA, PU, Cushlon, Phylon.</li>
                        <li>Bền, chống bám bẩn, dễ dàng lau chùi. Mũi giày đầy đặn, form dáng chuẩn.</li>
                        <li>Bảo vệ đầu ngón chân khi hoạt động. Có lớp lót đệm bên trong.</li>
                        <li>Êm, di chuyển nhiều không bị đau chân. Cổ giày thiết kế đơn giản, vừa vặn.</li>
                        <li>Di chuyển dễ dàng, thoải mái.</li>
                        <li>Đế bằng chất liệu cao su</li>
                        <li>Êm ái, độ bám tốt, chống trơn trượt.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-productRelated clearfix">
            <div className="heading-title text-center">
              <h2>Sản phẩm liên quan</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
