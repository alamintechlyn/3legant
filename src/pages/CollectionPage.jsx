import { Suspense, lazy } from 'react';
import SkeletonLoader from '../compnents/SkeletonLoader';
import Navigation from '../compnents/Navigation';

const CollectionBanner = lazy(() => import('../compnents/CollectionBanner'));
const CollectionProudct = lazy(() => import('../compnents/collection/CollectionProudct'));
const Newslatter = lazy(() => import('../compnents/Newslatter'));
const Footer = lazy(() => import('../compnents/Footer'));

const CollectionPage = () => {
    return (
        <div>
            <Navigation />

            <Suspense fallback={<SkeletonLoader height={200} />}>
                <CollectionBanner />
            </Suspense>

            <Suspense fallback={<SkeletonLoader height={300} count={2} />}>
                <CollectionProudct />
            </Suspense>

            <Suspense fallback={<SkeletonLoader height={150} />}>
                <Newslatter />
            </Suspense>

            <Suspense fallback={<SkeletonLoader height={100} />}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default CollectionPage;
