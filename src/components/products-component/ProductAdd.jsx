import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthProvider";
import { Navigate } from "react-router";

export default function ProductAdd() {
    const { loggedInUser } = useContext(AuthContext);
    
    const [productTitle, setProductTitle] = useState('');
    const [productImg, setProductImg] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState('');
    const [description, setDescription] = useState('');


    function addProductHandler(event){
        event.preventDefault();

        const newProduct = {
            productTitle,
            productImg,
            price,
            description,
            qty,
        }

        fetch('http://localhost:3000/addproduct',{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            setProductTitle('');
            setProductImg('');
            setPrice('');
            setQty('');
            setDescription('')
        })
        .catch((error) => console.log(error))


    }

    if(!loggedInUser){
        return <Navigate to="/login"/>
    }

  return (
    <div className="w-2/5 p-6 flex flex-col gap-4">
        <h1 className="my-2 text-xl font-bold">Add Product</h1>
        <form className="w-3/4 flex flex-col gap-4" onSubmit={addProductHandler}>
        <div>
            <label>Product Title</label>
            <Input type="text" name="title" value={productTitle} placeholder="Product title" onChange={(event) =>setProductTitle(event.target.value)}/>
        </div>
        <div>
            <label>Image URL</label>
            <Input type="text" name="imgUrl" value={productImg} placeholder="Product image" onChange={(event) =>setProductImg(event.target.value)}/>
        </div>
        <div className=" w-full flex justify-between">
            <div>
                <label>Price</label>
                <Input type="number" name="price" value={price} placeholder="Pick a price" onChange={(event) =>setPrice(event.target.value)}/>
            </div>
            <div>
                <label>Quantity</label>
                <Input type="number" name="qty" value={qty} placeholder="Available stock" onChange={(event) =>setQty(event.target.value)}/>
            </div>
        </div>
        <div>
            <label>Description</label>
            <Textarea type="text" name="desc" value={description} placeholder="product details" onChange={(event) =>setDescription(event.target.value)}/>
        </div>
        <Button type="submit">Add Product</Button>
        </form>
    </div>
  )
}
