import { useEffect, useState } from "react"
import ProductLists from "./ProductLists";


export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then((response) => response.json())
        .then((products) => setProducts(products))
        .catch((error) => console.log(error))
    },[]);

    console.log(products)

  return (
    <div className="flex flex-wrap gap-2">
        {products.map((product) => <ProductLists key={product.id} {...product}/>)}
    </div>
  );
}
