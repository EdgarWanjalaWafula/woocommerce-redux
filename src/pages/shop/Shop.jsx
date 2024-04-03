import { useSelector, connect, useDispatch } from "react-redux"
import ShopBanner from "./ShopBanner"
import ShopFilter from "./ShopFilter"
import { useEffect } from "react"

export default function Shop() {
    const { products } = useSelector((state) => state.productsReducer);
    console.log(products)
    return (
        <>
            <ShopBanner />
            <ShopFilter />
        </>
    )
}