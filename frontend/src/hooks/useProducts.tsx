import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/getProducts";

const useProducts = () => {
    const {isLoading,error,data} = useQuery({
        queryKey:["query/products"],
        queryFn: getProducts,
    });
    
    return{ isLoading,error,data}
}

export default useProducts
