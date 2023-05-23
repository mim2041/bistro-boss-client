import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)
        })
    }, []);
    console.log(menu)
    return (
        <section>
            <SectionTitle
                heading="Popular Items"
                subHeading={"From Our Menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
            {
                menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                ></MenuItem>)
            }
            </div>
            <button className="btn btn-outline mt-4 border-0 border-b-4">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;