import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const FoodCard = ({item}) => {
    const {_id, name, image, price, recipe} = item;
    const {user} = useContext(AuthContext);
    const [ , refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const hadnleAddToCart = item => {
        console.log(item);
        if(user && user.email){
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.insertedId){
                        refetch();   //refetch to update the item of the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food Added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image}alt="Shoes" /></figure>
                <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-2">${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                    <button onClick={() => hadnleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-500 mt-4">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;