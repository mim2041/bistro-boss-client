import { useQuery } from '@tanstack/react-query'
// import { useContext } from 'react';
// import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    const {user} = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const {  refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async() => {
            const response = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', response)
            return response.data;
        },
      })

      return [cart, refetch];
};

export default useCart;