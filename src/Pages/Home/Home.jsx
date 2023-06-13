import  'react';
import Banner from './Banner/Banner'
import Sectors from './Sectors/Sectors';
import SomeFeaturedJobs from './SomeFeaturedJobs/SomeFeaturedJobs';
import AboutUs from '../AboutUs/AboutUs';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sectors></Sectors>
            <SomeFeaturedJobs></SomeFeaturedJobs>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;