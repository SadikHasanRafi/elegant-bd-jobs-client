import  'react';
import Banner from './Banner/Banner'
import Sectors from './Sectors/Sectors';
import Jobs from '../Jobs/Jobs';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sectors></Sectors>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;