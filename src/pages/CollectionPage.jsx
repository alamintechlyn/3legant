
import Navigation from '../compnents/Navigation';
import CollectionProudct from '../compnents/collection/CollectionProudct';
import Newslatter from './../compnents/Newslatter';
import Footer from '../compnents/Footer';
import CollectionBanner from '../compnents/CollectionBanner';

const CollectionPage = () => {
    return (
        <div>
            <Navigation/>
            <CollectionBanner/>
            <CollectionProudct/>
            <Newslatter/>
            <Footer/>
        </div>
    );
};

export default CollectionPage;