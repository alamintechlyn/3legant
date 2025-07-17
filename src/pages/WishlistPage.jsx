import { Suspense, lazy } from 'react';
import SkeletonLoader from '../compnents/SkeletonLoader';

import Navigation from '../compnents/Navigation';

const Wishlist = lazy(() => import('../compnents/profile/Wishlist'));
const Footer = lazy(() => import('../compnents/Footer'));

const WishlistPage = () => {
    return (
        <div>
            <Navigation />

            <Suspense fallback={<SkeletonLoader height={300} />}>
                <Wishlist />
            </Suspense>

            <Suspense fallback={<SkeletonLoader height={120} />}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default WishlistPage;
