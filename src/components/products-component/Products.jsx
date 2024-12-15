import { useContext, useEffect, useState } from "react"
import ProductLists from "./ProductLists";
import { AuthContext } from "@/contexts/AuthProvider";
import { Navigate } from "react-router";


export default function Products() {
    const [products, setProducts] = useState([]);
    const { loggedInUser } = useContext(AuthContext);


    console.log(loggedInUser);

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then((response) => response.json())
        .then((products) => setProducts(products))
        .catch((error) => console.log(error))
    },[]);

    if (!loggedInUser) {
      return <Navigate to="/login" replace />;
    }

  return (
    <div className="flex justify-center flex-wrap gap-2">
        {products.map((product) => <ProductLists key={product.id} {...product}/>)}
    </div>
  );
}
