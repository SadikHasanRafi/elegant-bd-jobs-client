import  'react';
import Banner from './Banner/Banner'
import Sectors from './Sectors/Sectors';
import SomeJobs from './SomeJobs/SomeJobs';
import AboutUs from '../AboutUs/AboutUs';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sectors></Sectors>
            <SomeJobs></SomeJobs>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;