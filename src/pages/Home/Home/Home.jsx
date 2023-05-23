import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Service from "../Service/Service";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            
            <Banner></Banner>
            <Category></Category>
            <Service></Service>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <CallUs></CallUs>
            <Recommends></Recommends>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;