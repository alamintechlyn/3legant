import { useEffect, useState } from "react";
import { allCetegoryRequest } from "../apiRequest/apiRequiest";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/state-slice/category-slice";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Category = () => {
  const categoryData = useSelector((state) => state.getCategory.category);
  const dispatch = useDispatch();
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    (async () => {
      setFetching(true);
      let result = await allCetegoryRequest();
      dispatch(setCategory(result));
      setFetching(false);
    })();
  }, [dispatch]);

  if (fetching) {
    // Skeleton for 3 category cards (adjust height/width as needed)
    return (
      <section className="category-section">
        <div className="container category-container">
          <h2 className="common_main_head">Shop by Categories</h2>
          <div className="row row-cols-2 category-row">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="col-lg-4">
                <div className="category-card">
                  <Skeleton height={150} />
                  <h4 className="categroy-text">
                    <Skeleton width={120} />
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="category-section">
      <div className="container category-container">
        <h2 className="common_main_head">Shop by Categories</h2>
        <div className="row row-cols-2 category-row">
          {categoryData.length > 0 ? (
            categoryData.map((item, i) => (
              <div key={i} className="col-lg-4">
                <div className="category-card">
                  <div className="img-wrapper">
                    <Link to={"/category/" + item?._id}>
                      <img
                        src={`${item?.brandImg}?w=400&q=75`}
                        alt={item?.brandName || "Category"}
                        loading="lazy"
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>
                  <h4 className="categroy-text">{item?.brandName}</h4>
                </div>
              </div>
            ))
          ) : (
            <span className="text-center">No Data Found</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Category;
