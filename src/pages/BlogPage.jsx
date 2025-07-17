import BlogList from '../compnents/blog/BlogList';
import Navigation from './../compnents/Navigation';
import BlogBanner from '../compnents/blog/BlogBanner';
import Footer from './../compnents/Footer';
import Newslatter from './../compnents/Newslatter';
import Header from '../compnents/Header';


const BlogPage = () => {
    return (
        <>
            <Header />
            <Navigation />
            <BlogBanner />
            <BlogList />
            <Newslatter />
            <Footer />
        </>
    );
};

export default BlogPage;