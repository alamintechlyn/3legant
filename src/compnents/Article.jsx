import React from "react";
import { Link } from "react-router-dom";

const Article = () => {
  return (
    <div>
      <section className="article_section">
        <div className="container">
          <div className="row artical-top-row">
            <div className="col-6">
              <h2 className="common_main_head">Latest Articles</h2>
            </div>
            <div className="col-6 btn-area-article">
              <Link to="/blog">
                <div className="btns">
                  <p className="btn-text">Collections</p>
                  <ArrowIcon />
                </div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <ArticleCard
                image="https://cdn.shopify.com/s/files/1/0639/7352/3521/files/7b5fe67e42604bcc5d365e977b486682beeb66de.jpg?v=1746111324"
                title="Air Jordan x Travis Scott Event"
              />
            </div>
            <div className="col-lg-4">
              <ArticleCard
                image="https://cdn.shopify.com/s/files/1/0639/7352/3521/files/9d1877db0e69147f1c4c545648901a7bd65a174c.jpg?v=1746111324"
                title="The timeless classics on the green"
              />
            </div>
            <div className="col-lg-4">
              <ArticleCard
                image="https://cdn.shopify.com/s/files/1/0639/7352/3521/files/58240a3d128558f36df46b415a06f2ff2df59df6.jpg?v=1746111324"
                title="The 2023 Ryder Cup"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Arrow Icon Component
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
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

// Article Card Component with CLS fixes
const ArticleCard = ({ image, title }) => (
  <div className="article-card">
    <Link to="/blog">
      <div className="image-wrapper">
        <img
          src={`${image}?width=100&format=webp&quality=80`}
          alt={title}
          loading="lazy"
          decoding="async"
          width={100}
          height={100}
        />
      </div>
      <h4 className="categroy-text">{title}</h4>
    </Link>
    <Link to="/blog">
      <div className="btns">
        <p className="btn-text">Collections</p>
        <ArrowIcon />
      </div>
    </Link>
  </div>
);

export default Article;