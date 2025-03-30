import axios from "axios";

export const getProducts = async () => {
    try{
        const res = await axios.get("/products");
        return res.data;
    }catch(e:any){
        console.log(e)
        throw e
    }
}