import React, { useEffect } from "react";
import { allCollectionListRequest } from "../apiRequest/apiRequiest";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCollection } from "../redux/state-slice/collection-slice";

const ShopCollection = () => {
  const collectionData = useSelector((state) => state.getCollection.collection);
  const dispatch= useDispatch();
  useEffect(() => {
    (async () => {
      let result = await allCollectionListRequest();
      dispatch(setCollection(result));
    })();
  }, []);

  return (
    <div>
      <section className="shop-collection-section">
        <div className="container">
          <h2 className="common_main_head">Shop Collection</h2>
          <div className="row shop-main-row">
            {collectionData?.slice(0, 1).map((item) => (
              <div className="col-lg-6 left-col" key={item?.id}>
                <div className="img-card-area">
                  <Link to={"/collection/" + item?._id}>
                    <img
                      src={item.collectionImage}
                      alt={item?.collectionName}
                    />
                  </Link>
                  <h4 className="card-text">{item?.collectionName}</h4>
                  <Link to={"/collection/" + item?._id}>
                    <div className="btns">
                      <p className="btn-text">Collections</p>
                      <ArrowIcon />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
            <div className="col-lg-6 down-col-shop">
              {collectionData?.slice(1).map((item) => (
                <div className="img-card-area" key={item?.id}>
                  <div className="text">
                    <h4 className="card-text">{item?.collectionName}</h4>
                    <Link to={"/collection/" + item?._id}>
                      <div className="btns">
                        <p className="btn-text">Collections</p>
                        <ArrowIcon />
                      </div>
                    </Link>
                  </div>
                  <div className="img">
                    <Link to={"/collection/" + item?._id}>
                      <img
                        src={item?.collectionImage}
                        alt={item?.collectionName}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M4.1665 10H15.8332"
      stroke="#121212"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.8335 15L15.8335 10"
      stroke="#121212"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.8335 5L15.8335 10"
      stroke="#121212"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ShopCollection;
