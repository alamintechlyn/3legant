
import Navigation from './../Navigation';
import Footer from '../Footer';
import CategoryCollection from './CategoryCollection';
import CategroyCollection from '../CategoryBanner';

const CategoryProduct = () => {
    return (
        <div>
            <Navigation />
            <CategroyCollection />
            <CategoryCollection />
            <Footer />
        </div>
    );
};

export default CategoryProduct;