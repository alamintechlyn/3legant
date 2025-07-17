import React, { Suspense, lazy } from 'react';
import SkeletonLoader from '../compnents/SkeletonLoader';

import Header from '../compnents/Header';
import Navigation from '../compnents/Navigation';

const CartDetails = lazy(() => import('../compnents/CartDetails'));
const Footer = lazy(() => import('../compnents/Footer'));

const CartPage = () => {
    return (
        <div>
            <Header />
            <Navigation />

            <Suspense fallback={<SkeletonLoader height={300} />}>
                <CartDetails />
            </Suspense>

            <Suspense fallback={<SkeletonLoader height={120} />}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default CartPage;
