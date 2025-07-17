import { Suspense, lazy } from "react";
import SkeletonLoader from "../compnents/SkeletonLoader";

import Navigation from "./../compnents/Navigation";

const Account = lazy(() => import("../compnents/profile/Account"));
const Footer = lazy(() => import("../compnents/Footer"));

const MyAccountPage = () => {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<SkeletonLoader height={300} />}>
        <Account />
      </Suspense>

      <Suspense fallback={<SkeletonLoader height={120} />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default MyAccountPage;
