import { Suspense, lazy } from "react";
import SkeletonLoader from "../compnents/SkeletonLoader";

import Header from "../compnents/Header";
import Navigation from "../compnents/Navigation";

const Banner = lazy(() => import("../compnents/shop/Banner"));
const Collection = lazy(() => import("../compnents/shop/Collection"));
const Newslatter = lazy(() => import("../compnents/Newslatter"));
const Footer = lazy(() => import("../compnents/Footer"));

const ShopPage = () => {
  return (
    <div>
      <Header />
      <Navigation />

      <Suspense fallback={<SkeletonLoader height={200} />}>
        <Banner />
      </Suspense>

      <Suspense fallback={<SkeletonLoader height={300} count={2} />}>
        <Collection />
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

export default ShopPage;

