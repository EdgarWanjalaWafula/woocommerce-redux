import { useSelector } from "react-redux"

export default function Shop(){
    const products = useSelector((state) => state)
    console.log(products)
    return <h1>Shop</h1>
}