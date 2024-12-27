import react from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Schedule from '../components/Schedule';
import Feature from '../components/feature';
import WhyChoose from '../components/WhyChoose';
import CallAction from '../components/CallAction';
import Portfolio from '../components/portfolio';
import Service from '../components/Service';
import PricingTable from '../components/PricingTable';
import Blog from '../components/Blog';


const Home = () => {
    return (
        <>
            <div>
                <Header />
                <Banner />
                <Schedule />
                <Feature />
                <WhyChoose />
                <CallAction />
                <Portfolio />
                <Service />
                <PricingTable />
                <Blog />
            </div>
        </>
    )
}
export default Home;