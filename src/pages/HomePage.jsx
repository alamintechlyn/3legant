
import { Suspense, lazy } from "react";
import Header from "../compnents/Header";
import Navigation from "../compnents/Navigation";
import Banner from "../compnents/Banner";
import SkeletonLoader from "../compnents/SkeletonLoader"; 

const FeatureCollection = lazy(() => import("../compnents/FeatureCollection"));
const Category = lazy(() => import("../compnents/Category"));
const Discount = lazy(() => import("../compnents/Discount"));
const ShopCollection = lazy(() => import("../compnents/ShopCollection"));
const Article = lazy(() => import("../compnents/Article"));
const Newslatter = lazy(() => import("../compnents/Newslatter"));
const Instagram = lazy(() => import("../compnents/Instagram"));
const Footer = lazy(() => import("../compnents/Footer"));

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />

      <Suspense fallback={<SkeletonLoader height={300} />}>
        <FeatureCollection />
      </Suspense>

      <Suspense fallback={<SkeletonLoader height={150} count={2} />}>
        <Category />
      </Suspense>

      <Suspense fallback={<SkeletonLoader height={200} />}>
        <Discount />
      </Suspense>

      <Suspense fallback={<SkeletonLoader height={250} />}>
        <ShopCollection />
      </Suspense>

      <Suspense fallback={<SkeletonLoader height={200} count={2} />}>
        <Article />
      </Suspense>

      <Suspense fallback={<SkeletonLoader height={150} />}>
        <Newslatter />
      </Suspense>

      <Suspense fallback={<SkeletonLoader height={150} />}>
        <Instagram />
      </Suspense>

      <Suspense fallback={<SkeletonLoader height={100} />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default HomePage;
