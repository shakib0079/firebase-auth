/* eslint-disable react/prop-types */
import {
    Card,
    CardDescription,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button"


export default function ProductLists({productTitle,price,productImg,description,qty}) {


  return (
    <Card className="w-80 px-4 flex flex-col justify-center items-center gap-2">
        <img src={productImg} alt="" width={150}/>
        <div className="w-full flex justify-between items-center">
        <CardTitle className="text-sm">{productTitle}</CardTitle>
        <CardTitle className="text-lg">{price} ৳</CardTitle>
        </div>
        <CardDescription className="text-justify">{description}</CardDescription>
        <h1 className="text-sm">Availbale: {qty} qty</h1>
        <CardFooter>
            <Button>Add to Cart</Button>
        </CardFooter>
    </Card>
  )
}
