import { Suspense, lazy } from 'react';
import SkeletonLoader from '../compnents/SkeletonLoader';

import Navigation from '../compnents/Navigation';

const CheckOut = lazy(() => import('../compnents/CheckOut'));
const Footer = lazy(() => import('../compnents/Footer'));

const CheckOutPage = () => {
    return (
        <div>
            <Navigation />

            <Suspense fallback={<SkeletonLoader height={300} />}>
                <CheckOut />
            </Suspense>

            <Suspense fallback={<SkeletonLoader height={100} />}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default CheckOutPage;
