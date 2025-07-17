import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { allCollectionListRequest } from "../apiRequest/apiRequiest";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCollection } from "../redux/state-slice/collection-slice";

const ShopCollection = () => {
  const collectionData = useSelector((state) => state.getCollection.collection);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let result = await allCollectionListRequest();
      dispatch(setCollection(result));
      setLoading(false); // data fetch complete
    })();
  }, []);

  if (loading) {
    // Skeleton UI while loading
    return (
      <section className="shop-collection-section">
        <div className="container">
          <h2 className="common_main_head">Shop Collection</h2>
          <div className="row shop-main-row">
            <div className="col-lg-6 left-col">
              <Skeleton height={300} />
              <Skeleton width={150} height={30} style={{ marginTop: 10 }} />
              <Skeleton width={100} height={40} style={{ marginTop: 10 }} />
            </div>
            <div className="col-lg-6 down-col-shop">
              {[...Array(3)].map((_, idx) => (
                <div
                  className="img-card-area"
                  key={idx}
                  style={{ marginBottom: 20 }}
                >
                  <Skeleton width={150} height={30} />
                  <Skeleton width={100} height={40} style={{ marginTop: 10 }} />
                  <Skeleton height={150} style={{ marginTop: 10 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Normal UI when data loaded
  return (
    <section className="shop-collection-section">
      <div className="container">
        <h2 className="common_main_head">Shop Collection</h2>
        {collectionData && collectionData.length > 0 ? (
          <div className="row shop-main-row">
            {collectionData?.slice(0, 1).map((item) => (
              <div className="col-lg-6 left-col" key={item?._id}>
                <div className="img-card-area">
                  <Link to={"/collection/" + item?._id}>
                    <img src={item.collectionImage} alt={item?.collectionName} />
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
                <div className="img-card-area" key={item?._id}>
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
                      <img src={item?.collectionImage} alt={item?.collectionName} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center mt-4">No collections available.</p>
        )}
      </div>
    </section>
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
