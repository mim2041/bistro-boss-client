
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import useCart from '../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on data
    const isAdmin = true;

    return (
        <div>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side bg-[#f3c075]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80  ">
                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservations"><FaUtensils></FaUtensils> Add Items</NavLink></li>

                                <li><NavLink to="/dashboard/reservations"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            
                                <li><NavLink><FaBook></FaBook> Manage Bookings</NavLink></li>
                                
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                                
                            </> : 
                            <>
                                <li><NavLink to="/dashboard/home"><FaHome></FaHome> Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                            
                                <li><NavLink><FaWallet></FaWallet> Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart<div className="badge badge-secondary">+{cart?.length || 0}</div></NavLink></li>
                            </>
                        }
                    
                    <div className="divider">OR</div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/menu'><GiHamburgerMenu/>Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order Food</NavLink></li>
                    <li></li>
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default Dashboard;