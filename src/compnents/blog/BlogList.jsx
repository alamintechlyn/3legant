import React from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0639/7352/3521/files/pexels-kindelmedia-6573709.jpg?v=1746933627",
      title: "7 ways to decor your home like a professional",
      date: "October 16, 2023",
    },
    {
      id: 2,
      image:
        "https://cdn.shopify.com/s/files/1/0639/7352/3521/files/9ab0de662e28fa10e659a1acbbc99ecb89d85e7a.jpg?v=1746112228",
      title: "Inside a beautiful kitchen organization",
      date: "October 16, 2023",
    },
    {
      id: 3,
      image:
        "https://cdn.shopify.com/s/files/1/0639/7352/3521/files/7b5fe67e42604bcc5d365e977b486682beeb66de.jpg?v=1746111324",
      title: "Decor your bedroom for your children",
      date: "October 16, 2023",
    },
    {
      id: 4,
      image:
        "https://cdn.shopify.com/s/files/1/0639/7352/3521/files/58240a3d128558f36df46b415a06f2ff2df59df6.jpg?v=1746111324",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
    {
      id: 5,
      image:
        "https://cdn.shopify.com/s/files/1/0639/7352/3521/files/6083781f02748b31636ad6f6111f0c2c7bac4c21.jpg?v=1746112215",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
    {
      id: 6,
      image:
        "https://cdn.shopify.com/s/files/1/0639/7352/3521/files/fc6aee3082f8080b7bc0c5245a7472d96c9e2490.jpg?v=1746112225",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
    {
      id: 7,
      image:
        "https://cdn.shopify.com/s/files/1/0639/7352/3521/files/7b5fe67e42604bcc5d365e977b486682beeb66de.jpg?v=1746111324",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
    {
      id: 8,
      image:
        "https://cdn.shopify.com/s/files/1/0639/7352/3521/files/pexels-kindelmedia-6573695.jpg?v=1746933631",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
    {
      id: 9,
      image:
        "https://cdn.shopify.com/s/files/1/0639/7352/3521/files/c456d04e4963ce2362c0dd6120739fdb60471759.jpg?v=1746112222",
      title: "Modern texas home is beautiful and completely kid-friendly",
      date: "October 16, 2023",
    },
  ];
  return (
    <>
      <div className="blog_section">
        <div className="container">
          <div className="blog-header">
            <div className="blog-tabs">
              <button className="tab active">All Blog</button>
              <button className="tab">Featured</button>
            </div>
          </div>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div className="blog-card" key={post.id}>
                <div className="blog-image">
                  <Link to="/blogDetails">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-date">{post.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="load-more">
            <button className="load-more-button">Show more</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BlogList;
