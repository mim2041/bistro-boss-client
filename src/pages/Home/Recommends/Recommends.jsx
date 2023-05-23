import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RecommendCard from "./RecommendCard";


const Recommends = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const offeredData = data.filter(item => item.category === 'offered')
                setItems(offeredData);
            })
    } ,[])
    
    return (
        <div>
            <SectionTitle
                heading={"Chef Recommends"}
                subHeading={"Should Try"}
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    items.map(item => <RecommendCard
                        key={item._id}
                        item={item}
                    ></RecommendCard>)
                }
            </div>
        </div>
    );
};

export default Recommends;