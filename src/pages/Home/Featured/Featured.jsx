import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed  text-white pt-8 my-20">
            <SectionTitle
                heading={"Featured Item"}
                subHeading={"Check it out"}
            ></SectionTitle>
            <div className="flex justify-center items-center py-20 px-36 pt-12 bg-slate-500 bg-opacity-60">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md: ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam animi ipsa eaque unde sequi tempora quo voluptas, neque harum rerum vel esse necessitatibus odio pariatur consequatur, consequuntur beatae deserunt facilis amet vitae. Dolore distinctio saepe amet repellendus aliquam cumque quas culpa voluptatum vitae, et accusantium similique sapiente. Distinctio, deleniti beatae.</p>
                    
                    <button className="btn btn-outline mt-4 border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;