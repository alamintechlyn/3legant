import React, { Suspense, lazy } from 'react';
import SkeletonLoader from '../compnents/SkeletonLoader';

import Header from '../compnents/Header';
import Navigation from '../compnents/Navigation';

const Contact = lazy(() => import('../compnents/Contact us/Contact'));
const Footer = lazy(() => import('../compnents/Footer'));

const ContactPage = () => {
    return (
        <div>
            <Header />
            <Navigation />

            <Suspense fallback={<SkeletonLoader height={300} />}>
                <Contact />
            </Suspense>

            <Suspense fallback={<SkeletonLoader height={150} />}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default ContactPage;
