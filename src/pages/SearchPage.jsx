import { Suspense, lazy } from 'react';
import SkeletonLoader from '../compnents/SkeletonLoader';

import Navigation from './../compnents/Navigation';

const Search = lazy(() => import('../compnents/Search'));
const Footer = lazy(() => import('../compnents/Footer'));

const SearchPage = () => {
    return (
        <div>
            <Navigation />

            <Suspense fallback={<SkeletonLoader height={300} />}>
                <Search />
            </Suspense>

            <Suspense fallback={<SkeletonLoader height={120} />}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default SearchPage;
