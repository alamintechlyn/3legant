import { Suspense, lazy } from 'react';
import SkeletonLoader from '../compnents/SkeletonLoader';

import Navigation from '../compnents/Navigation';

const OrderData = lazy(() => import('../compnents/profile/OrderData'));
const Footer = lazy(() => import('../compnents/Footer'));

const OrderPage = () => {
    return (
        <div>
            <Navigation />

            <Suspense fallback={<SkeletonLoader height={300} />}>
                <OrderData />
            </Suspense>

            <Suspense fallback={<SkeletonLoader height={120} />}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default OrderPage;
