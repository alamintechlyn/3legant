import { Suspense, lazy } from 'react';
import SkeletonLoader from '../compnents/SkeletonLoader';

import Navigation from '../compnents/Navigation';

const Order = lazy(() => import('../compnents/Order'));
const Footer = lazy(() => import('../compnents/Footer'));

const OrderCompletePage = () => {
    return (
        <div>
            <Navigation />

            <Suspense fallback={<SkeletonLoader height={300} />}>
                <Order />
            </Suspense>

            <Suspense fallback={<SkeletonLoader height={120} />}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default OrderCompletePage;
