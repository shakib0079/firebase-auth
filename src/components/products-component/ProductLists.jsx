/* eslint-disable react/prop-types */
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button"


export default function ProductLists({productTitle}) {


  return (
    <Card className="w-60 px-2 flex flex-col justify-center items-center gap-2">
        <img src="https://www.gadstyle.com/wp-content/uploads/2024/08/samsung-galaxy-watch-7-ai-smart-watch-40mm-44mm-2.webp" alt="" width={150}/>
        <CardTitle className="text-xl">{productTitle}</CardTitle>
        <CardDescription className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequuntur deserunt eius. Eaque minus provident cupiditate impedit.</CardDescription>
        <CardFooter>
            <Button>Add to Cart</Button>
        </CardFooter>
    </Card>
  )
}
