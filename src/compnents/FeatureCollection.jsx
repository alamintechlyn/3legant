import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import {
  allProductRequiest,
  cartCreateRequest,
  getAllCartRequest,
} from "../apiRequest/apiRequiest";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/state-slice/product-slice";
import CartDrawer from "./CartDrawer";
import { setCartList } from "../redux/state-slice/cartList-slice";
import { Link } from "react-router-dom";

import SkeletonLoader from "./SkeletonLoader";  // react-loading-skeleton based

const FeatureCollection = () => {
  const productData = useSelector((state) => state.getProduct.product);
  const dispatch = useDispatch();
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchingProducts, setFetchingProducts] = useState(true);

  const cartListData = useSelector((state) => state.getCartList.cartList);
  const cartList = cartListData?.data?.data || [];

  const isProductInCart = (productId) => {
    return cartList.some((item) => item?.product?._id === productId);
  };

  const onCloseHandler = () => {
    setIsCartDrawerOpen(false);
  };

  useEffect(() => {
    (async () => {
      setFetchingProducts(true);
      try {
        let result = await allProductRequiest();
        dispatch(setProduct(result));
      } finally {
        setFetchingProducts(false);
      }
    })();
  }, [dispatch]);

  const createCartHandler = async (id) => {
    setLoading(true);
    try {
      let qty = 1;
      let color = "";
      let size = "";
      let result = await cartCreateRequest(id, qty, color, size);
      if (result) {
        const cartList = await getAllCartRequest();
        dispatch(setCartList(cartList));
        setIsCartDrawerOpen(true);
      }
    } finally {
      setLoading(false);
    }
  };

  if (fetchingProducts) {
    // Show 4 skeleton cards with height matching approx your product cards
    return <SkeletonLoader height={350} count={4} />;
  }

  return (
    <div>
      <section className="feature-collection-section">
        <div className="container">
          <div className="header-feature">
            <h2 className="common_main_head">Featured</h2>
            <div id="main_bullets"></div>
          </div>
          <div className="row">
            <div className="feature-header">
              <Swiper
                spaceBetween={24}
                slidesPerView={4.5}
                loop={false}
                modules={[Pagination]}
                pagination={{
                  el: "#main_bullets",
                  type: "bullets",
                  bulletClass: "custom-bullet",
                  bulletActiveClass: "custom-bullet-active",
                  clickable: true,
                }}
                breakpoints={{
                  0: { slidesPerView: 1.5, spaceBetween: 16 },
                  640: { slidesPerView: 1.5, spaceBetween: 16 },
                  768: { slidesPerView: 2.5, spaceBetween: 24 },
                  1024: { slidesPerView: 4.5, spaceBetween: 24 },
                }}
              >
                {productData?.length > 0 ? (
                  productData.slice(0, 8).map((item, i) => {
                    const isInCart = isProductInCart(item._id);
                    return (
                      <SwiperSlide key={i}>
                        <div className="collection_card">
                          <div className="card">
                            <span className="hot-label">{item?.remark}</span>
                            {item.discountPrice && item.discountPrice > item.price && (
                              <span className="dis-label">
                                {Math.round(
                                  ((item.discountPrice - item.price) / item.discountPrice) * 100
                                )}
                                % OFF
                              </span>
                            )}

                            <Link to={"/product-details/" + item._id}>
                              <img className="product-image" src={item.image} alt={item.title} />
                            </Link>
                            <button
                              onClick={() => createCartHandler(item._id)}
                              className={`add-cart ${isInCart ? "disabled" : ""}`}
                              disabled={isInCart || loading}
                            >
                              {isInCart ? "View Details" : "Add to cart"}
                            </button>
                          </div>
                          {/* rating stars etc. */}
                          <h3 className="product-title">{item.title}</h3>
                          <div className="price-box">
                            <p className="price">TK. {item.price}</p>
                            {item.discountPrice > 0 && <p className="dis-price">TK. {item.discountPrice}</p>}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })
                ) : (
                  <span className="text-center">No Data Found</span>
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <CartDrawer isOpen={isCartDrawerOpen} onClose={onCloseHandler} />
    </div>
  );
};

export default FeatureCollection;
