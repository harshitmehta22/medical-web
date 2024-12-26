import react from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Schedule from '../components/Schedule';
import Feature from '../components/feature';
import WhyChoose from '../components/WhyChoose';
import CallAction from '../components/CallAction';
import Portfolio from '../components/portfolio';


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
            </div>
        </>
    )
}
export default Home;