import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = ({ height = 200, count = 1 }) => {
    <div
        style={{
            width: "100%", 
            maxWidth: "1200px",
            margin: "0 auto", 
            padding: "20px",  
            boxSizing: "border-box"
        }}
    >
        <Skeleton height={height} count={count} style={{ marginBottom: "10px" }} />
    </div>
};

export default SkeletonLoader;
