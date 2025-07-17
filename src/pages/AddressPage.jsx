import { Suspense, lazy } from 'react';
import SkeletonLoader from '../compnents/SkeletonLoader';

import Navigation from '../compnents/Navigation';

const Address = lazy(() => import('../compnents/profile/Address'));
const Footer = lazy(() => import('../compnents/Footer'));

const AddressPage = () => {
    return (
        <div>
            <Navigation />

            <Suspense fallback={<SkeletonLoader height={300} />}>
                <Address />
            </Suspense>

            <Suspense fallback={<SkeletonLoader height={120} />}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default AddressPage;
