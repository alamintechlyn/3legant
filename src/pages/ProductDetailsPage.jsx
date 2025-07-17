import { Suspense, lazy } from 'react';
import SkeletonLoader from '../compnents/SkeletonLoader';

import Header from '../compnents/Header';
import Navigation from '../compnents/Navigation';

const ProductDetails = lazy(() => import('../compnents/ProductDetails'));
const Newslatter = lazy(() => import('../compnents/Newslatter'));
const Footer = lazy(() => import('../compnents/Footer'));

const ProductDetailsPage = () => {
    return (
        <div>
            <Header />
            <Navigation />

            <Suspense fallback={<SkeletonLoader height={400} />}>
                <ProductDetails />
            </Suspense>

            <Suspense fallback={<SkeletonLoader height={150} />}>
                <Newslatter />
            </Suspense>

            <Suspense fallback={<SkeletonLoader height={120} />}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default ProductDetailsPage;
