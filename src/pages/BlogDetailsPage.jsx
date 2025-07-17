import { Suspense, lazy } from 'react';
import SkeletonLoader from '../compnents/SkeletonLoader';

import Navigation from '../compnents/Navigation';

const BlogDetails = lazy(() => import('../compnents/blog/BlogDetails'));
const Footer = lazy(() => import('../compnents/Footer'));

const BlogDetailsPage = () => {
    return (
        <>
            <Navigation />

            <Suspense fallback={<SkeletonLoader height={400} />}>
                <BlogDetails />
            </Suspense>

            <Suspense fallback={<SkeletonLoader height={120} />}>
                <Footer />
            </Suspense>
        </>
    );
};

export default BlogDetailsPage;
